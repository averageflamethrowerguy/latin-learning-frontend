import {useState} from "react";
import {pronounFormList} from "./wordConfiguration";

export function PronounChecks(props: {}) {
    // for now, we'll just show the noun chart

    // const [inEndingMode, setInEndingMode] = useState(true)
    const [didSubmit, setDidSubmit] = useState(false)
    const [pronounIndex, setPronounIndex] = useState(0)

    const workingObject = pronounFormList[pronounIndex]

    return (
        <div style={{marginTop: 60}}>
            {
                <div onClick={() => {
                    setPronounIndex(pronounIndex+1)
                    setDidSubmit(false)
                }}>
                    Next Pronoun
                </div>
            }

            <div>
                {workingObject.nominative.singular.masculine}

                <div>
                    Singular
                </div>

                <table>
                    <tr>
                        <th></th>
                        <th>Masculine</th>
                        <th>Feminine</th>
                        <th>Neuter</th>
                    </tr>
                    <tr>
                        <th>Nominative</th>
                        <th><WordInputElement correctAnswer={workingObject.nominative.singular.masculine} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.nominative.s} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.} didSubmit={didSubmit} /></th>
                        <th><input />{didSubmit && workingObject.nominative.singular.masculine}</th>
                        <th><input />{didSubmit && workingObject.nominative.singular.feminine}</th>
                        <th><input />{didSubmit && workingObject.nominative.singular.neuter}</th>
                    </tr>
                    <tr>
                        <th>Genitive</th>
                        <th><input />{didSubmit && workingObject.genitive.singular.masculine}</th>
                        <th><input />{didSubmit && workingObject.genitive.singular.feminine}</th>
                        <th><input />{didSubmit && workingObject.genitive.singular.neuter}</th>
                    </tr>
                    <tr>
                        <th>Dative</th>
                        <th><input />{didSubmit && workingObject.dative.singular.masculine}</th>
                        <th><input />{didSubmit && workingObject.dative.singular.feminine}</th>
                        <th><input />{didSubmit && workingObject.dative.singular.neuter}</th>
                    </tr>
                    <tr>
                        <th>Accusative</th>
                        <th><input />{didSubmit && workingObject.accusative.singular.masculine}</th>
                        <th><input />{didSubmit && workingObject.accusative.singular.feminine}</th>
                        <th><input />{didSubmit && workingObject.accusative.singular.neuter}</th>
                    </tr>
                    <tr>
                        <th>Ablative</th>
                        <th><input />{didSubmit && workingObject.ablative.singular.masculine}</th>
                        <th><input />{didSubmit && workingObject.ablative.singular.feminine}</th>
                        <th><input />{didSubmit && workingObject.ablative.singular.neuter}</th>
                    </tr>
                </table>

                <div>
                    Plural
                </div>

                <table>
                    <tr>
                        <th></th>
                        <th>Masculine</th>
                        <th>Feminine</th>
                        <th>Neuter</th>
                    </tr>
                    <tr>
                        <th>Nominative</th>
                        <th><input />{didSubmit && workingObject.nominative.plural.masculine}</th>
                        <th><input />{didSubmit && workingObject.nominative.plural.feminine}</th>
                        <th><input />{didSubmit && workingObject.nominative.plural.neuter}</th>
                    </tr>
                    <tr>
                        <th>Genitive</th>
                        <th><input />{didSubmit && workingObject.genitive.plural.masculine}</th>
                        <th><input />{didSubmit && workingObject.genitive.plural.feminine}</th>
                        <th><input />{didSubmit && workingObject.genitive.plural.neuter}</th>
                    </tr>
                    <tr>
                        <th>Dative</th>
                        <th><input />{didSubmit && workingObject.dative.plural.masculine}</th>
                        <th><input />{didSubmit && workingObject.dative.plural.feminine}</th>
                        <th><input />{didSubmit && workingObject.dative.plural.neuter}</th>
                    </tr>
                    <tr>
                        <th>Accusative</th>
                        <th><input />{didSubmit && workingObject.accusative.plural.masculine}</th>
                        <th><input />{didSubmit && workingObject.accusative.plural.feminine}</th>
                        <th><input />{didSubmit && workingObject.accusative.plural.neuter}</th>
                    </tr>
                    <tr>
                        <th>Ablative</th>
                        <th><input />{didSubmit && workingObject.ablative.plural.masculine}</th>
                        <th><input />{didSubmit && workingObject.ablative.plural.feminine}</th>
                        <th><input />{didSubmit && workingObject.ablative.plural.neuter}</th>
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