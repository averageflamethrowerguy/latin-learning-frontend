import {useEffect, useState} from "react";

interface PropTypes {
    wordList: string[][];
    currentWord: string[];
    updateLevel: (success : boolean) => void
    updateCurrentIndex: () => void

}

export function LatinToLatin(props: PropTypes) {
    const [didSubmit, setDidSubmit] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const [guessedWord, setGuessedWord] = useState("")

    useEffect(() => {
        setDidSubmit(false)
        setDidSubmit(false)
        setGuessedWord("")
    }, [props.currentWord])

    const testingWord = props.currentWord[2] ? props.currentWord[2] : props.currentWord[1]

    return <div>
        <div>{props.currentWord[1]} in English is?</div>
        <div style={{display: "flex"}}>
            <input onChange={(e) => setGuessedWord(e.target.value)} />
            {
                didSubmit &&
                <div>{isCorrect ? "Correct" : "Incorrect"}</div>
            }
        </div>
        <div style={{display: "flex"}}>
            <div
                style={{cursor: "pointer", backgroundColor: "blue"}}
                onClick={() => {
                    setDidSubmit(true)
                    const isCorrectTemp = (guessedWord === props.currentWord[0])
                    setIsCorrect(isCorrectTemp)
                }}>Submit</div>

            {
                didSubmit &&
                <div>
                    <div>{props.currentWord[0]}</div>
                    <div
                        style={{cursor: 'pointer', color: "green"}}
                        onClick={() => {
                            props.updateCurrentIndex()
                            props.updateLevel(isCorrect)
                        }}>Next</div>
                </div>
            }
        </div>


    </div>

}