import {useState} from "react";
import {adjAdverbList} from "./wordConfiguration";
import { WordInputElement } from "./WordInputElement";

export function AdjAdverbChecks(props: {}) {
    // for now, we'll just show the noun chart

    // const [inEndingMode, setInEndingMode] = useState(true)
    const [didSubmit, setDidSubmit] = useState(false)
    const [pronounIndex, setPronounIndex] = useState(0)

    const workingObject = adjAdverbList[pronounIndex]

    return (
        <div style={{marginTop: 60}}>
            {
                <div onClick={() => {
                    setPronounIndex(pronounIndex+1)
                    setDidSubmit(false)
                }}>
                    Next Adj/Adverb
                </div>
            }

            <div>
                {workingObject.adjectives[0]}

                <table>
                    <tr>
                        <th></th>
                        <th>Positive</th>
                        <th>Comparative</th>
                        <th>Superlative</th>
                    </tr>
                    <tr>
                        <th>Adjective</th>
                        <th><WordInputElement correctAnswer={workingObject.adjectives[0]} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.adjectives[1]} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.adjectives[2]} didSubmit={didSubmit} /></th>
                    </tr>
                    <tr>
                        <th>Adverb</th>
                        <th><WordInputElement correctAnswer={workingObject.adverbs[0]} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.adverbs[1]} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.adverbs[2]} didSubmit={didSubmit} /></th>
                    </tr>
                </table>

                <div
                    style={{cursor: "pointer"}}
                    onClick={() => setDidSubmit(true)}>
                    Check {">>"}
                </div>
            </div>

        </div>
    )
}