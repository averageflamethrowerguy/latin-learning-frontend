import {useState} from "react";
import {verbEndingStructure, verbFormList} from "./wordConfiguration";

export function VerbChecks(props: {}) {
    // for now, we'll just show the verb chart

    const [inEndingMode, setInEndingMode] = useState(true)
    const [didSubmit, setDidSubmit] = useState(false)
    const [verbIndex, setVerbIndex] = useState(0)

    const workingObject = inEndingMode ? verbEndingStructure : verbFormList[verbIndex]

    return (
        <div style={{marginTop: 60}}>
            <div onClick={() => setInEndingMode(false)}>Check Verbs</div>
            {
                !inEndingMode &&
                <div onClick={() => {
                    setVerbIndex(verbIndex+1)
                    setDidSubmit(false)
                }}>
                    Next Verb
                </div>
            }

            {!inEndingMode && workingObject.active.masculine.indicative.present.singular[2]}

            <div>Present</div>
            <table>
                <tr>
                    <th></th>
                    <th>Singular</th>
                    <th>Plural</th>
                </tr>
                <tr>
                    <th>1st</th>
                    <th><input />{didSubmit && workingObject.active.masculine.indicative.present.singular[0]}</th>
                    <th><input />{didSubmit && workingObject.active.masculine.indicative.present.plural[0]}</th>
                </tr>
                <tr>
                    <th>2nd</th>
                    <th><input />{didSubmit && workingObject.active.masculine.indicative.present.singular[1]}</th>
                    <th><input />{didSubmit && workingObject.active.masculine.indicative.present.plural[1]}</th>
                </tr>
                <tr>
                    <th>3rd</th>
                    <th><input />{didSubmit && workingObject.active.masculine.indicative.present.singular[2]}</th>
                    <th><input />{didSubmit && workingObject.active.masculine.indicative.present.plural[2]}</th>
                </tr>
            </table>

            {
                workingObject.active.masculine.indicative.imperfect &&
                <div>
                    <div>Imperfect</div>
                    <table>
                        <tr>
                            <th></th>
                            <th>Singular</th>
                            <th>Plural</th>
                        </tr>
                        <tr>
                            <th>1st</th>
                            <th><input />{didSubmit && workingObject.active.masculine.indicative.imperfect.singular[0]}</th>
                            <th><input />{didSubmit && workingObject.active.masculine.indicative.imperfect.plural[0]}</th>
                        </tr>
                        <tr>
                            <th>2nd</th>
                            <th><input />{didSubmit && workingObject.active.masculine.indicative.imperfect.singular[1]}</th>
                            <th><input />{didSubmit && workingObject.active.masculine.indicative.imperfect.plural[1]}</th>
                        </tr>
                        <tr>
                            <th>3rd</th>
                            <th><input />{didSubmit && workingObject.active.masculine.indicative.imperfect.singular[2]}</th>
                            <th><input />{didSubmit && workingObject.active.masculine.indicative.imperfect.plural[2]}</th>
                        </tr>
                    </table>
                </div>
            }

            <div>Perfect</div>
            <table>
                <tr>
                    <th></th>
                    <th>Singular</th>
                    <th>Plural</th>
                </tr>
                <tr>
                    <th>1st</th>
                    <th><input />{didSubmit && workingObject.active.masculine.indicative.perfect.singular[0]}</th>
                    <th><input />{didSubmit && workingObject.active.masculine.indicative.perfect.plural[0]}</th>
                </tr>
                <tr>
                    <th>2nd</th>
                    <th><input />{didSubmit && workingObject.active.masculine.indicative.perfect.singular[1]}</th>
                    <th><input />{didSubmit && workingObject.active.masculine.indicative.perfect.plural[1]}</th>
                </tr>
                <tr>
                    <th>3rd</th>
                    <th><input />{didSubmit && workingObject.active.masculine.indicative.perfect.singular[2]}</th>
                    <th><input />{didSubmit && workingObject.active.masculine.indicative.perfect.plural[2]}</th>
                </tr>
            </table>

            {
                workingObject.active.masculine.indicative.imperfect &&
                <div>
                    <div>Pluperfect</div>
                    <table>
                        <tr>
                            <th></th>
                            <th>Singular</th>
                            <th>Plural</th>
                        </tr>
                        <tr>
                            <th>1st</th>
                            <th><input />{didSubmit && workingObject.active.masculine.indicative.pluperfect.singular[0]}</th>
                            <th><input />{didSubmit && workingObject.active.masculine.indicative.pluperfect.plural[0]}</th>
                        </tr>
                        <tr>
                            <th>2nd</th>
                            <th><input />{didSubmit && workingObject.active.masculine.indicative.pluperfect.singular[1]}</th>
                            <th><input />{didSubmit && workingObject.active.masculine.indicative.pluperfect.plural[1]}</th>
                        </tr>
                        <tr>
                            <th>3rd</th>
                            <th><input />{didSubmit && workingObject.active.masculine.indicative.pluperfect.singular[2]}</th>
                            <th><input />{didSubmit && workingObject.active.masculine.indicative.pluperfect.plural[2]}</th>
                        </tr>
                    </table>
                </div>
            }

            <div
                style={{cursor: "pointer"}}
                onClick={() => setDidSubmit(true)}>
                Check {">>"}
            </div>
        </div>
    )
}
