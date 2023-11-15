import {useEffect, useState} from "react";

interface PropTypes {
    vocabularyList: VocabEntry[];
    currentWord: VocabEntry;
    updateLevel: (success : boolean) => void
    updateCurrentIndex: () => void
}

const getInitialRandomIndices = (vocabularyList: VocabEntry[], currentWord: VocabEntry) => {
    let randomIndices = []
    for (let i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * (vocabularyList.length))
        // prevent duplicate entries
        while (vocabularyList[index].English === currentWord.English) {
            index = Math.floor(Math.random() * (vocabularyList.length))
        }
        randomIndices.push(index)
    }
    return randomIndices
}

export function EnglishToLatinMultipleChoice(props: PropTypes) {

    const [randomIndices, setRandomIndices] = useState(
        getInitialRandomIndices(props.vocabularyList, props.currentWord)
    )
    const [correctAnswerRandomIndex, setCorrectAnswerRandomIndex] = useState(Math.floor(Math.random() * 4))
    const [selectedIndex, setSelectedIndex] = useState(-1)

    useEffect(() => {
        setRandomIndices(getInitialRandomIndices(props.vocabularyList, props.currentWord))
        setCorrectAnswerRandomIndex(Math.floor(Math.random() * 4))
        setSelectedIndex(-1)
    }, [props.currentWord])

    let possibleAnswers = []
    let j = 0
    for (let i = 0; i < 4; i++) {
        if (i === correctAnswerRandomIndex) {
            possibleAnswers.push(props.currentWord.Latin.split(", ")[0])
        }
        else {
            possibleAnswers.push(props.vocabularyList[randomIndices[j]].Latin.split(", ")[0])
            j++
        }
    }

    return <div>
        <div>
            "{
                props.currentWord.English
            }" is what in latin?
        </div>
        <div>
            {
                possibleAnswers.map((word, index) => {
                    return <div
                        key={index}
                        style={(selectedIndex !== -1 && index === correctAnswerRandomIndex) ?
                            {backgroundColor: "green"} :
                            (selectedIndex === index) ?
                                {backgroundColor: "red"} :
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