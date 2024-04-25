import {useEffect, useState} from "react";
import AdvancedCheckString from "utils/AdvancedCheckString";

interface PropTypes {
    vocabularyList: VocabEntry[];
    currentWord: VocabEntry;
    updateLevel: (success : boolean) => void
    updateCurrentIndex: () => void
}

export function EnglishToLatinFreeResponse(props: PropTypes) {
    const [didSubmit, setDidSubmit] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const [guessedWord, setGuessedWord] = useState("")

    useEffect(() => {
        setDidSubmit(false)
        setDidSubmit(false)
        setGuessedWord("")
    }, [props.currentWord])

    return <div>
        <div>{props.currentWord.English} in Latin is?</div>
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
                const isCorrectTemp = (AdvancedCheckString(guessedWord, props.currentWord.Latin.split(", ")[0].split(": ")[0]))
                setIsCorrect(isCorrectTemp)
            }}>Submit</div>

            {
                didSubmit &&
                <div>
                    <div>{props.currentWord.Latin.split(", ")[0].split(": ")[0]}</div>
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