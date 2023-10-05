import {useEffect, useState} from "react";
import {wordList} from "./wordConfiguration";

interface PropTypes {
    wordList: string[][];
    currentWord: string[];
    updateLevel: (success : boolean) => void
    updateCurrentIndex: () => void

}

const getInitialRandomIndices = () => {
    let randomIndices = []
    for (let i = 0; i < 3; i++) {
        randomIndices.push(Math.floor(Math.random() * (wordList.length)))
    }
    return randomIndices
}

export function LatinToEnglishMultipleChoice(props: PropTypes) {

    const [randomIndices, setRandomIndices] = useState(getInitialRandomIndices())
    const [correctAnswerRandomIndex, setCorrectAnswerRandomIndex] = useState(Math.floor(Math.random() * 4))
    const [selectedIndex, setSelectedIndex] = useState(-1)

    useEffect(() => {
        setRandomIndices(getInitialRandomIndices)
        setCorrectAnswerRandomIndex(Math.floor(Math.random() * 4))
        setSelectedIndex(-1)
    }, [props.currentWord])

    let possibleAnswers = []
    let j = 0
    for (let i = 0; i < 4; i++) {
        if (i === correctAnswerRandomIndex) {
            possibleAnswers.push(props.currentWord[0])
        }
        else {
            possibleAnswers.push(props.wordList[randomIndices[j]][0])
            j++
        }
    }

    return <div>
        <div>
            "{
            props.currentWord[1]
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