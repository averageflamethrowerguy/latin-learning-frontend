import {useState} from "react";
import {verbEndingStructure, verbFormList} from "./wordConfiguration";
import styled from "styled-components";

export function VerbChecks(props: {}) {
    // for now, we'll just show the verb chart

    const [inEndingMode, setInEndingMode] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)
    const [verbIndex, setVerbIndex] = useState(0)

    const testOnElements = useState({
        active: {
            masculine: {
                indicative: {
                    present: {
                       singular: [true, true, true],
                       plural: [true, true, true]
                    }
                }
            }
        }
    })

    const workingObject = inEndingMode ? verbEndingStructure : verbFormList[verbIndex]

    const toggleTestElements = (testElement: string[], remove: boolean) => {
        let newTestOnElements = [...testOnElements]

        if (remove) {
            newTestOnElements = newTestOnElements.filter((elem: string[]) => {
                for (let i = 0; i < elem.length; i++) {
                    if (elem[i] !== testElement[i]) {
                        return true
                    }
                }
                return false
            })
        }
    }

    return (
        <div style={{marginTop: 60, backgroundColor: "lightgrey", padding: 10,
            display: "flex", justifyContent: "space-between"
        }}>
        <div style={{}}>
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

            {!inEndingMode &&
                <div>
                    {workingObject.active.masculine.indicative.present.singular[0]},
                    {workingObject.active.masculine.indicative.infinitive},
                    {workingObject.active.masculine.indicative.perfect.singular[0]}
                </div>
            }
    
            {
                Object.entries(workingObject).map(elem => {
                    let outerTest = testOnElements[elem[0]]
                    if (outerTest) {
                        return (
                          <div>
                              {
                                  Object.entries(elem[1]).map(gender => {
                                      let genderTest = outerTest[gender[0]]
                                      if (genderTest) {
                                          return (
                                            <div>
                                                {
                                                    Object.entries(gender[1]).map(middleElem => {
                                                        let middleTest = genderTest[middleElem[0]]
                                                        if (middleTest) {
                                                            return (
                                                              <div>
                                                                  {
                                                                      Object.entries(middleElem[1]).map(caseElem => {
                                                                          let caseTest = middleTest[caseElem[0]]
                                                                          if (caseTest) {
                                                                              return (
                                                                                <TenseMatrix>
                                                                                    <div>{caseElem[0]}</div>
                                                                                    <table>
                                                                                        <tr>
                                                                                            <th></th>
                                                                                            {
                                                                                                caseTest.singular && <th>Singular</th>
                                                                                            }
                                                                                            {
                                                                                                caseTest.plural && <th>Plural</th>
                                                                                            }
                                                                                        </tr>
                                                                                        {
                                                                                            ((caseTest.singular && caseTest.singular[0]) ||
                                                                                            (caseTest.plural && caseTest.plural[0])) &&
                                                                                            <tr>
                                                                                                <th>1st</th>
                                                                                                {
                                                                                                    (caseTest.singular && caseTest.singular[0]) &&
                                                                                                    <th><input/>{didSubmit && caseElem.singular[0]}</th>
                                                                                                }
                                                                                                {
                                                                                                    (caseTest.plural && caseTest.plural[0]) &&
                                                                                                    <th><input />{didSubmit && caseElem.plural[0]}</th>
                                                                                                }
                                                                                            </tr>
                                                                                        }
    
                                                                                        {
                                                                                            ((caseTest.singular && caseTest.singular[1]) ||
                                                                                              (caseTest.plural && caseTest.plural[1])) &&
                                                                                            <tr>
                                                                                                <th>2nd</th>
                                                                                                {
                                                                                                    (caseTest.singular && caseTest.singular[1]) &&
                                                                                                    <th><input/>{didSubmit && caseElem.singular[1]}</th>
                                                                                                }
                                                                                                {
                                                                                                    (caseTest.plural && caseTest.plural[1]) &&
                                                                                                    <th><input />{didSubmit && caseElem.plural[1]}</th>
                                                                                                }
                                                                                            </tr>
                                                                                        }
    
                                                                                        {
                                                                                            ((caseTest.singular && caseTest.singular[2]) ||
                                                                                              (caseTest.plural && caseTest.plural[2])) &&
                                                                                            <tr>
                                                                                                <th>3rd</th>
                                                                                                {
                                                                                                    (caseTest.singular && caseTest.singular[2]) &&
                                                                                                    <th><input/>{didSubmit && caseElem.singular[2]}</th>
                                                                                                }
                                                                                                {
                                                                                                    (caseTest.plural && caseTest.plural[2]) &&
                                                                                                    <th><input />{didSubmit && caseElem.plural[2]}</th>
                                                                                                }
                                                                                            </tr>
                                                                                        }
                                                                                    </table>
                                                                                </TenseMatrix>
                                                                              )
                                                                          }
                                                                      })
                                                                  }
                                                              </div>
                                                            )
                                                        }
                                                        return <div />
                                                    })
                                                }
                                            </div>
                                          )
                                      }
                                      return <div />
                                  })
                              }
                          </div>
                        )
                    }
                    return <div />
                  }
                )
            }

            

            {
                workingObject.active.masculine.indicative.imperfect &&
                <TenseMatrix>
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
                </TenseMatrix>
            }

            <TenseMatrix>
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
            </TenseMatrix>

            {
                workingObject.active.masculine.indicative.pluperfect &&
                <TenseMatrix>
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
                </TenseMatrix>
            }

            <div
                style={{cursor: "pointer"}}
                onClick={() => setDidSubmit(true)}>
                Check {">>"}
            </div>
        </div>

            <div>
                <div>Test me on</div>
                <div>
                    <div>
                        <div>
                            Forms
                        </div>

                        <div>
                            <div>
                                Present
                            </div>
                            <div>
                                Imperfect
                            </div>
                            <div>
                                Perfect
                            </div>
                            <div>
                                Pluperfect
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            Number
                        </div>

                        <div>
                            <div>
                                Singular
                            </div>
                            <div>
                                Plural
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            Person
                        </div>

                        <div>
                            <div>
                                1st
                            </div>
                            <div>
                                2nd
                            </div>
                            <div>
                                3rd
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const TenseMatrix = styled.div`
  background-color: white;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
`

const ControlPanelSection = styled.div`
    padding: 10px;
`