import {useState} from "react";
import {pronounFormList} from "./wordConfiguration";
import { WordInputElement } from "./WordInputElement";

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
                        <th><WordInputElement correctAnswer={workingObject.nominative.singular.feminine} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.nominative.singular.neuter} didSubmit={didSubmit} /></th>
                    </tr>
                    <tr>
                        <th>Genitive</th>
                        <th><WordInputElement correctAnswer={workingObject.genitive.singular.masculine} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.genitive.singular.feminine} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.genitive.singular.neuter} didSubmit={didSubmit} /></th>
                    </tr>
                    <tr>
                        <th>Dative</th>
                        <th><WordInputElement correctAnswer={workingObject.dative.singular.masculine} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.dative.singular.feminine} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.dative.singular.neuter} didSubmit={didSubmit} /></th>
                    </tr>
                    <tr>
                        <th>Accusative</th>
                        <th><WordInputElement correctAnswer={workingObject.accusative.singular.masculine} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.accusative.singular.feminine} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.accusative.singular.neuter} didSubmit={didSubmit} /></th>
                    </tr>
                    <tr>
                        <th>Ablative</th>
                        <th><WordInputElement correctAnswer={workingObject.ablative.singular.masculine} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.ablative.singular.feminine} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.ablative.singular.neuter} didSubmit={didSubmit} /></th>
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
                        <th><WordInputElement correctAnswer={workingObject.nominative.plural.masculine} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.nominative.plural.feminine} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.nominative.plural.neuter} didSubmit={didSubmit} /></th>
                    </tr>
                    <tr>
                        <th>Genitive</th>
                        <th><WordInputElement correctAnswer={workingObject.genitive.plural.masculine} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.genitive.plural.feminine} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.genitive.plural.neuter} didSubmit={didSubmit} /></th>
                    </tr>
                    <tr>
                        <th>Dative</th>
                        <th><WordInputElement correctAnswer={workingObject.dative.plural.masculine} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.dative.plural.feminine} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.dative.plural.neuter} didSubmit={didSubmit} /></th>
                    </tr>
                    <tr>
                        <th>Accusative</th>
                        <th><WordInputElement correctAnswer={workingObject.accusative.plural.masculine} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.accusative.plural.feminine} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.accusative.plural.neuter} didSubmit={didSubmit} /></th>
                    </tr>
                    <tr>
                        <th>Ablative</th>
                        <th><WordInputElement correctAnswer={workingObject.ablative.plural.masculine} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.ablative.plural.feminine} didSubmit={didSubmit} /></th>
                        <th><WordInputElement correctAnswer={workingObject.ablative.plural.neuter} didSubmit={didSubmit} /></th>
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