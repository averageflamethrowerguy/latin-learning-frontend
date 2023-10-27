import {useEffect, useState} from "react";
import {wordList} from "./wordConfiguration";
import {EnglishToLatinMultipleChoice} from "./EnglishToLatinMultipleChoice";
import {LatinToEnglishMultipleChoice} from "./LatinToEnglishMultipleChoice";
import {LatinToLatin} from "./LatinToLatin";
import {EnglishToLatinFreeResponse} from "./EnglishToLatinFreeResponse";

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
  const [ learningLevelsMap, setLearningLevelsMap ] = useState(Object.fromEntries(wordList.map(wordArray => {
    const storedLevel = localStorage.getItem(wordArray[0])
    if (storedLevel) {
      console.log(storedLevel)
    }
    return [wordArray[0], {learningLevel: storedLevel ? Number(storedLevel) : 1,
      latin: wordArray.slice(1, wordArray.length)}]
  })))
  const [ currentIndex, setCurrentIndex ] = useState(0);
  
  const updateIndex = () => {
    let tempIndex = currentIndex;
    if (wordList.length > 0) {
      // skip any indexes with a level of 6
      while (learningLevelsMap[wordList[(tempIndex += 1) % wordList.length][0]].learningLevel >= 6) {
        if (tempIndex === currentIndex) {
          console.log("ALL WORDS LEARNED");
          break;
        }
      }
    }
    
    setCurrentIndex(tempIndex)
  }
  
  useEffect(() => {
    updateIndex()
  }, [])
  
  const currentWord = wordList[currentIndex]
  const currentLevel = learningLevelsMap[currentWord[0]].learningLevel
  
  console.log("before switch")
  
  let levelCounts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0}
  for (let [key, value] of Object.entries(learningLevelsMap)) {
    if (value.learningLevel > 6) {
      levelCounts[6] += 1
    }
    else {
      levelCounts[`${value.learningLevel}`] += 1
    }
  }

  const updateLearningLevel = (level: number) => {
    let newLearningLevelsMap = Object.fromEntries(Object.entries(learningLevelsMap));
    newLearningLevelsMap[currentWord[0]].learningLevel = level
    localStorage.setItem(currentWord[0], `${level}`)
    setLearningLevelsMap(newLearningLevelsMap)
  }
  
  let componentToRender
  switch (currentLevel) {
    case 1:
      componentToRender = <EnglishToLatinMultipleChoice wordList={wordList} currentWord={currentWord} updateLevel={
        (success) => {
          let newLearningLevel = learningLevelsMap[currentWord[0]].learningLevel + (success ? 1 : 0)
          updateLearningLevel(newLearningLevel)
        }
      } updateCurrentIndex={updateIndex} />
      break;
    case 2:
      componentToRender = <LatinToEnglishMultipleChoice wordList={wordList} currentWord={currentWord} updateLevel={
        (success) => {
          let newLearningLevel = learningLevelsMap[currentWord[0]].learningLevel + (success ? 1 : 0)
          updateLearningLevel(newLearningLevel)
        }
      } updateCurrentIndex={updateIndex} />
      break;
    case 3:
      if (currentWord.length > 2) {
        componentToRender = <LatinToLatin wordList={wordList} currentWord={currentWord} updateLevel={
          (success) => {
            let newLearningLevel = learningLevelsMap[currentWord[0]].learningLevel + (success ? 1 : 0)
            updateLearningLevel(newLearningLevel)
          }
        } updateCurrentIndex={updateIndex} />
      }
      else {
        componentToRender = <EnglishToLatinFreeResponse wordList={wordList} currentWord={currentWord} updateLevel={
          (success) => {
            let newLearningLevel = learningLevelsMap[currentWord[0]].learningLevel + (success ? 1 : 0)
            updateLearningLevel(newLearningLevel)
          }
        } updateCurrentIndex={updateIndex} />
      }
      
      break;
    case 4:
      componentToRender = <EnglishToLatinFreeResponse wordList={wordList} currentWord={currentWord} updateLevel={
        (success) => {
          let newLearningLevel = learningLevelsMap[currentWord[0]].learningLevel + (success ? 1 : 0)
          updateLearningLevel(newLearningLevel)
        }
      } updateCurrentIndex={updateIndex} />
      break;
    default:
      componentToRender = <EnglishToLatinFreeResponse wordList={wordList} currentWord={currentWord} updateLevel={
        (success) => {
          let updateAmount = success ? 1 : -1
          let newLearningLevel = learningLevelsMap[currentWord[0]].learningLevel + updateAmount
          updateLearningLevel(newLearningLevel)
        }
      } updateCurrentIndex={updateIndex} />
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
                Level {key} : {100 * value / wordList.length}%
              </div>
            )
          })
        }
        <div style={{marginTop: 10, textDecoration: "underline", cursor: "pointer"}}
          onClick={() => {
            let newLearningLevelsMap = Object.fromEntries(Object.entries(learningLevelsMap));
            let newLearningLevel = 6
            newLearningLevelsMap[currentWord[0]].learningLevel = newLearningLevel
            localStorage.setItem(currentWord[0], `${newLearningLevel}`)
            setLearningLevelsMap(newLearningLevelsMap)
            updateIndex()
          }}
        >
          I know this word
        </div>
      </div>
    </div>
  )
}