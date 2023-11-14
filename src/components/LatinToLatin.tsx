import {useEffect, useState} from "react";

interface PropTypes {
    vocabularyList: VocabEntry[];
    currentWord: VocabEntry;
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

    const splitLatin = props.currentWord.Latin.split(", ")
    const testingWord = splitLatin[1] ? splitLatin[1] : splitLatin[0]

    return <div>
        <div>{splitLatin[0]} in the other Latin form is?</div>
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
                    const isCorrectTemp = (guessedWord === splitLatin[1])
                    setIsCorrect(isCorrectTemp)
                }}>Submit</div>

            {
                didSubmit &&
                <div>
                    <div>{splitLatin[1]}</div>
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