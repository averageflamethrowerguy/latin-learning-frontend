import { useState } from "react"
import { CompareTwoWords } from "./CompareTwoWords"

export function WordInputElement(props: {correctAnswer: string, didSubmit: boolean}) {
    const [testWord, setTestWord] = useState("")

    props.didSubmit && console.log({testingWord: testWord, correctAnswer: props.correctAnswer})

    return (
        <th style={{width: 250}}>
            <input
                style={{maxWidth: 150}}
                onChange={(e) => {
                    setTestWord(e.target.value)
                }}
            />
            {
                props.didSubmit && 
                <CompareTwoWords
                    testedWord={props.correctAnswer}
                    testingWord={testWord}
                />
            }
        </th>
    )
}