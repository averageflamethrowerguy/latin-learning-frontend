import {useEffect, useState} from "react";
import {nounFormList} from "./wordConfiguration";
import { WordInputElement } from "./WordInputElement";

export function RenderNounChecks(props: {workingObject: any}) {
    const [didSubmit, setDidSubmit] = useState(false)

    useEffect(() =>{
            setDidSubmit(false)
        },
        [props.workingObject]
    )

    return (
        <div>
            {props.workingObject.nominative.singular}

            <table>
                <tr>
                    <th></th>
                    <th>Singular</th>
                    <th>Plural</th>
                </tr>
                <tr>
                    <th>Nominative</th>
                    <th><WordInputElement correctAnswer={props.workingObject.nominative.singular} didSubmit={didSubmit} /></th>
                    <th><WordInputElement correctAnswer={props.workingObject.nominative.plural} didSubmit={didSubmit} /></th>
                </tr>
                <tr>
                    <th>Genitive</th>
                    <th><WordInputElement correctAnswer={props.workingObject.genitive.singular} didSubmit={didSubmit} /></th>
                    <th><WordInputElement correctAnswer={props.workingObject.genitive.plural} didSubmit={didSubmit} /></th>
                </tr>
                <tr>
                    <th>Dative</th>
                    <th><WordInputElement correctAnswer={props.workingObject.dative.singular} didSubmit={didSubmit} /></th>
                    <th><WordInputElement correctAnswer={props.workingObject.dative.plural} didSubmit={didSubmit} /></th>
                </tr>
                <tr>
                    <th>Accusative</th>
                    <th><WordInputElement correctAnswer={props.workingObject.accusative.singular} didSubmit={didSubmit} /></th>
                    <th><WordInputElement correctAnswer={props.workingObject.accusative.plural} didSubmit={didSubmit} /></th>
                </tr>
                <tr>
                    <th>Ablative</th>
                    <th><WordInputElement correctAnswer={props.workingObject.ablative.singular} didSubmit={didSubmit} /></th>
                    <th><WordInputElement correctAnswer={props.workingObject.ablative.plural} didSubmit={didSubmit} /></th>
                </tr>
            </table>

            <div
                style={{cursor: "pointer"}}
                onClick={() => setDidSubmit(true)}>
                Check {">>"}
            </div>
        </div>
    )
}

export function NounChecks(props: {}) {
    // for now, we'll just show the noun chart

    // const [inEndingMode, setInEndingMode] = useState(true)
    const [didSubmit, setDidSubmit] = useState(false)
    const [nounIndex, setNounIndex] = useState(0)

    const workingObject = nounFormList[nounIndex]

    return (
        <div style={{marginTop: 60}}>
            {
                <div onClick={() => {
                    setNounIndex(nounIndex+1)
                    setDidSubmit(false)
                }}>
                    Next Noun
                </div>
            }

            <RenderNounChecks workingObject={nounFormList[nounIndex]} />
        </div>
    )
}
