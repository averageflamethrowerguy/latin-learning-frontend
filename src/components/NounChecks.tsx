import {useEffect, useState} from "react";
import {nounFormList} from "./wordConfiguration";

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
                    <th><input />{didSubmit && props.workingObject.nominative.singular}</th>
                    <th><input />{didSubmit && props.workingObject.nominative.plural}</th>
                </tr>
                <tr>
                    <th>Genitive</th>
                    <th><input />{didSubmit && props.workingObject.genitive.singular}</th>
                    <th><input />{didSubmit && props.workingObject.genitive.plural}</th>
                </tr>
                <tr>
                    <th>Dative</th>
                    <th><input />{didSubmit && props.workingObject.dative.singular}</th>
                    <th><input />{didSubmit && props.workingObject.dative.plural}</th>
                </tr>
                <tr>
                    <th>Accusative</th>
                    <th><input />{didSubmit && props.workingObject.accusative.singular}</th>
                    <th><input />{didSubmit && props.workingObject.accusative.plural}</th>
                </tr>
                <tr>
                    <th>Ablative</th>
                    <th><input />{didSubmit && props.workingObject.ablative.singular}</th>
                    <th><input />{didSubmit && props.workingObject.ablative.plural}</th>
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
