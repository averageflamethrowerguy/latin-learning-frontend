import {useState} from "react";
import {nounFormList} from "./wordConfiguration";

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

            {workingObject.nominative.singular}

            <table>
                <tr>
                    <th></th>
                    <th>Singular</th>
                    <th>Plural</th>
                </tr>
                <tr>
                    <th>Nominative</th>
                    <th><input />{didSubmit && workingObject.nominative.singular}</th>
                    <th><input />{didSubmit && workingObject.nominative.plural}</th>
                </tr>
                <tr>
                    <th>Dative</th>
                    <th><input />{didSubmit && workingObject.dative.singular}</th>
                    <th><input />{didSubmit && workingObject.dative.plural}</th>
                </tr>
                <tr>
                    <th>Accusative</th>
                    <th><input />{didSubmit && workingObject.accusative.singular}</th>
                    <th><input />{didSubmit && workingObject.accusative.plural}</th>
                </tr>
                <tr>
                    <th>Ablative</th>
                    <th><input />{didSubmit && workingObject.ablative.singular}</th>
                    <th><input />{didSubmit && workingObject.ablative.plural}</th>
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
