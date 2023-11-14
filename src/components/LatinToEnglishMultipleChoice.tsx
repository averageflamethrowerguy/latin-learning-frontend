import {useEffect, useState} from "react";
import {vocabularyAsJSON} from "./vocabularyAsJSON";

interface PropTypes {
    vocabularyList: VocabEntry[];
    currentWord: VocabEntry;
    updateLevel: (success : boolean) => void
    updateCurrentIndex: () => void
}

const getInitialRandomIndices = (vocabularyList: VocabEntry[]) => {
    let randomIndices = []
    for (let i = 0; i < 3; i++) {
        randomIndices.push(Math.floor(Math.random() * (vocabularyList.length)))
    }
    return randomIndices
}

export function LatinToEnglishMultipleChoice(props: PropTypes) {

    const [randomIndices, setRandomIndices] = useState(getInitialRandomIndices(props.vocabularyList))
    const [correctAnswerRandomIndex, setCorrectAnswerRandomIndex] = useState(Math.floor(Math.random() * 4))
    const [selectedIndex, setSelectedIndex] = useState(-1)

    useEffect(() => {
        setRandomIndices(getInitialRandomIndices(props.vocabularyList))
        setCorrectAnswerRandomIndex(Math.floor(Math.random() * 4))
        setSelectedIndex(-1)
    }, [props.currentWord])

    let possibleAnswers = []
    let j = 0
    for (let i = 0; i < 4; i++) {
        if (i === correctAnswerRandomIndex) {
            possibleAnswers.push(props.currentWord.English)
        }
        else {
            possibleAnswers.push(props.vocabularyList[randomIndices[j]].English)
            j++
        }
    }

    return <div>
        <div>
            "{
            props.currentWord.Latin
        }" is what in English?
        </div>
        <div>
            {
                possibleAnswers.map((word, index) => {
                    return <div
                        key={index}
                        style={(selectedIndex === index) ?
                            ((selectedIndex === correctAnswerRandomIndex) ?
                                {backgroundColor: "green"} :
                                {backgroundColor: "red"}) :
                            {}
                        }
                        onClick={() => {
                            if (selectedIndex === -1) {
                                setSelectedIndex(index)
                            }
                        }}>
                        {word}
                    </div>
                })
            }
        </div>
        {
            (selectedIndex !== -1) &&
            <div onClick={() => {
                props.updateCurrentIndex()
                props.updateLevel((selectedIndex === correctAnswerRandomIndex))
            }}>
                Next {">>"}
            </div>
        }
    </div>

}