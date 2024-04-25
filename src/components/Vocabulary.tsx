import {useEffect, useState} from "react";
import {vocabularyAsJSON} from "./vocabularyAsJSON";
import {EnglishToLatinMultipleChoice} from "./EnglishToLatinMultipleChoice";
import {LatinToEnglishMultipleChoice} from "./LatinToEnglishMultipleChoice";
import {LatinToLatin} from "./LatinToLatin";
import {EnglishToLatinFreeResponse} from "./EnglishToLatinFreeResponse";
import PriorityQueue from "../utils/PriorityQueue";

type queueElement = {
  learningLevel: number;
  delay: number;
  nextReview: number | null;
  inPriorityQueue: boolean;
  latin: any
}

export function Vocabulary() {
  /**
   * Learning Levels:
   * 1. English to Latin (multiple choice)
   * 2. Latin to English (multiple choice)
   * 3. Latin to Latin (if multiple forms exist, typed out)
   * 4. English to Latin (typed out, always the first form)
   * 5. Probationary State (run Test #4 again, if failed go to State 4, else State 6)
   * 6. Known word
   */
  const [ learningLevelsMap, setLearningLevelsMap ] = useState(Object.fromEntries(vocabularyAsJSON.map(wordObject => {
    // for each element in the vocabulary list
    const firstLatinWord = wordObject.Latin.split(", ")[0]
    // get it from localstorage

    let rawObject = null
    try {
      rawObject = JSON.parse(localStorage.getItem(firstLatinWord) || '')
    }
    catch (err) {
      rawObject = 1
    }
    let storedLevel = rawObject.storedLevel
    let delay = rawObject.delay
    let nextReview = rawObject.nextReview

    // set it so it has a delay if not previously set
    if (!storedLevel) {
      storedLevel = rawObject
      delay = 5 * 60 * 1000 // 5 minute timeout
      nextReview = null
    }
    // if (storedLevel) {
    //   console.log(storedLevel)
    // }
    return [firstLatinWord, {
      learningLevel: storedLevel ? Number(storedLevel) : 1,
      delay,
      nextReview,
      inPriorityQueue: nextReview !== null,
      latin: wordObject
    }]
  })))
  /* END learning levels map creation */

  /* BEGIN creation of other variables */
  const [ currentChapter, setCurrentChapter ] = useState(40)
  // filter down the vocab list so it doesn't test chapters we haven't learned yet
  const vocabularyAsJSONFiltered = vocabularyAsJSON.filter(word => word.Stage <= currentChapter)
  const [ currentWord, setCurrentWord ] = useState(Array.from(vocabularyAsJSONFiltered)[0]);

  const [ priorityQueue, setPriorityQueue ] = useState(new PriorityQueue(
    (() => {
    const newLearningLevelsMap = learningLevelsMap
    const list = vocabularyAsJSONFiltered.map(wordObject => {
      const firstLatinWord = wordObject.Latin.split(", ")[0]
      // load it from the learningLevelsMap
      const info = learningLevelsMap[firstLatinWord]
  
      // just return Null if we don't have a nextReview
      if (info.nextReview === null) {
        return null
      }
      else {
        // update the learning levels map with the fact that we have a priority queuing location
        newLearningLevelsMap[firstLatinWord].inPriorityQueue = true
        return {priority: info.nextReview as number, value: info}
      }
      // filter out any elements without priority
    }).filter(elem => elem !== null) as {priority: number, value: any}[]

    // finally set the learning levels map.
    return list
  })()
  ))
  /* END creation of other variables */

  /******* findValidInNonQueue *******/
  /*
    Randomly selects a valid element that is not in the queue 
  */
  const findValidInNonQueue = () => {
    let tempIndex = Math.floor(Math.random()*vocabularyAsJSONFiltered.length);
    
    // skip anything already in the queue
    if (vocabularyAsJSONFiltered.length > 0) {
      while (
        learningLevelsMap[vocabularyAsJSONFiltered[tempIndex].Latin.split(", ")[0]].inPriorityQueue === true
      ) {
        tempIndex = Math.floor(Math.random()*vocabularyAsJSONFiltered.length);
      }
    }

    return vocabularyAsJSONFiltered[tempIndex]
  }

  /******* getNext ********/
  /*
    Selects either the next element in the queue or a valid element not in the queue
  */
  const getNext = () => {
    const currentTime = Date.now()
    const priorityQueueOption = priorityQueue.peek() as queueElement

    console.log(priorityQueueOption)
    console.log(priorityQueueOption.nextReview)
    console.log(priorityQueueOption.nextReview && (priorityQueueOption.nextReview < currentTime))

    // if we should review this element now
    if (priorityQueueOption && priorityQueueOption.nextReview && priorityQueueOption.nextReview < currentTime) {
      const newPriorityQueue = priorityQueue
      // remove the element from the queue
      newPriorityQueue.pop()
      // force the queue to propagate 
      setPriorityQueue(newPriorityQueue)
      
      setCurrentWord(priorityQueueOption.latin)
    }
    // otherwise, find a valid element not in the queue
    else {
      setCurrentWord(findValidInNonQueue())
    }
  }

  useEffect(getNext, [])
  
  let trimmedWord = currentWord.Latin.split(", ")[0]
  const currentLevel = learningLevelsMap[trimmedWord].learningLevel
  
  // console.log("before switch")
  
  let levelCounts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
  for (let [key, value] of Object.entries(learningLevelsMap)) {
    if (value.learningLevel > 6) {
      levelCounts[6] += 1
    }
    else {
      levelCounts[`${value.learningLevel}`] += 1
    }
  }

  /***** updateLearningLevel ******/
  /*
    1. updates learning level
    2. sets delay
    3. sets timeout
  */
  const updateLearningLevel = (level: number, success: boolean) => {
    let newLearningLevelsMap = Object.fromEntries(Object.entries(learningLevelsMap));
    let delay = learningLevelsMap[trimmedWord].delay
    if (success) {
      delay = 8*delay
    }
    else {
      delay = 3*60*1000 // 3 min
    }
    const queueElem: queueElement = {
      learningLevel: level,
      delay,
      nextReview: Date.now() + (delay as number),
      inPriorityQueue: true,
      latin: currentWord
    }
    newLearningLevelsMap[trimmedWord] = queueElem

    // set the priority queue
    let newPriorityQueue = priorityQueue
    newPriorityQueue.add(queueElem.nextReview as number, queueElem)

    // set the local storage
    localStorage.setItem(trimmedWord, JSON.stringify({
      storedLevel: level,
      delay,
      nextReview: queueElem.nextReview
    }))
    // set the learning levels map
    setLearningLevelsMap(newLearningLevelsMap)
  }
  
  let componentToRender
  switch (currentLevel) {
    case 1:
      componentToRender = <EnglishToLatinMultipleChoice vocabularyList={vocabularyAsJSONFiltered} currentWord={currentWord} updateLevel={
        (success) => {
          let newLearningLevel = learningLevelsMap[trimmedWord].learningLevel + (success ? 1 : 0)
          updateLearningLevel(newLearningLevel, success)
        }
      } updateCurrentIndex={getNext} />
      break;
    case 2:
      componentToRender = <LatinToEnglishMultipleChoice vocabularyList={vocabularyAsJSONFiltered} currentWord={currentWord} updateLevel={
        (success) => {
          let newLearningLevel = learningLevelsMap[trimmedWord].learningLevel + (success ? 1 : 0)
          updateLearningLevel(newLearningLevel, success)
        }
      } updateCurrentIndex={getNext} />
      break;
    case 3:
      // if (currentWord.Latin.split(", ").length > 1) {
      //   componentToRender = <LatinToLatin vocabularyList={vocabularyAsJSONFiltered} currentWord={currentWord} updateLevel={
      //     (success) => {
      //       let newLearningLevel = learningLevelsMap[trimmedWord].learningLevel + (success ? 1 : 0)
      //       updateLearningLevel(newLearningLevel, success)
      //     }
      //   } updateCurrentIndex={updateIndex} />
      // }
      // else {
        componentToRender = <EnglishToLatinFreeResponse vocabularyList={vocabularyAsJSONFiltered} currentWord={currentWord} updateLevel={
          (success) => {
            let newLearningLevel = learningLevelsMap[trimmedWord].learningLevel + (success ? 1 : 0)
            updateLearningLevel(newLearningLevel, success)
          }
        } updateCurrentIndex={getNext} />
      // }
      
      break;
    case 4:
      componentToRender = <EnglishToLatinFreeResponse vocabularyList={vocabularyAsJSONFiltered} currentWord={currentWord} updateLevel={
        (success) => {
          let newLearningLevel = learningLevelsMap[trimmedWord].learningLevel + (success ? 1 : 0)
          updateLearningLevel(newLearningLevel, success)
        }
      } updateCurrentIndex={getNext} />
      break;
    default:
      componentToRender = <EnglishToLatinFreeResponse vocabularyList={vocabularyAsJSONFiltered} currentWord={currentWord} updateLevel={
        (success) => {
          let updateAmount = success ? 1 : -1
          let newLearningLevel = learningLevelsMap[trimmedWord].learningLevel + updateAmount
          updateLearningLevel(newLearningLevel, success)
        }
      } updateCurrentIndex={getNext} />
      break;
  }
  
  return (
    <div style={{
      display: "flex",
      padding: 10,
      backgroundColor: "lightgrey",
      justifyContent: "space-evenly"}}
    >
      <div style={{fontSize: 24, width: 400}}>
        {componentToRender}
      </div>
  
      <div style={{backgroundColor: "white", padding: 10, borderRadius: 10}}>
        {
          Object.entries(levelCounts).map(([key, value]) => {
            return (
              <div>
                Level {key} : {100 * value / vocabularyAsJSONFiltered.length}%
              </div>
            )
          })
        }
        <div style={{marginTop: 10, textDecoration: "underline", cursor: "pointer"}}
          onClick={() => {
            let newLearningLevelsMap = Object.fromEntries(Object.entries(learningLevelsMap));
            let newLearningLevel = 6
            newLearningLevelsMap[trimmedWord].learningLevel = newLearningLevel
            updateLearningLevel(newLearningLevel, true)
            setLearningLevelsMap(newLearningLevelsMap)
            getNext()
          }}
        >
          I know this word
        </div>
        <div>
          Current chapter: {currentChapter}
        </div>
      </div>
    </div>
  )
}