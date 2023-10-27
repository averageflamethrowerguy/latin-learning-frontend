import {useState} from "react";
import {verbEndingStructure, verbFormList} from "./wordConfiguration";
import styled from "styled-components";

export function VerbChecks(props: {}) {
    // for now, we'll just show the verb chart

    const [inEndingMode, setInEndingMode] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)
    const [verbIndex, setVerbIndex] = useState(0)
    
    const [verbPerson, setVerbPerson] = useState([0, 1, 2])
    const [verbNumber, setVerbNumber] = useState(["singular", "plural"])
    const [verbTense, setVerbTense] = useState(["present", "perfect"])
    const [verbMood, setVerbMood] = useState(["indicative"])
    const [verbGender, setVerbGender] = useState(["masculine"])
    const [verbVoice, setVerbVoice] = useState(["active"])
    
    const genericClickListener = (modifyString: string, unmodifiedArray: string[], setter: any, remove: boolean) => {
        let newArray = [...unmodifiedArray]
        
        // removing and re-adding will add the element to the end of the newArray
        newArray = newArray.filter(element => element !== modifyString)

        if (!remove) {
            newArray.push(modifyString)
        }
        
        setter(newArray)
    }

    const workingObject = inEndingMode ? verbEndingStructure : verbFormList[verbIndex]

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
                Object.entries(workingObject).map(voice => {
                    if (verbVoice.includes(voice[0])) {
                        return (
                          <div>
                              {
                                  Object.entries(voice[1]).map(gender => {
                                      if (verbGender.includes(gender[0])) {
                                          return (
                                            <div>
                                                {
                                                    Object.entries(gender[1]).map(mood => {
                                                        if (verbMood.includes(mood[0])) {
                                                            return (
                                                              <div>
                                                                  {
                                                                      Object.entries(mood[1]).map(tense => {
                                                                          if (verbTense.includes(tense[0])) {
                                                                              return (
                                                                                <TenseMatrix>
                                                                                    <div>{tense[0]}</div>
                                                                                    <table>
                                                                                        <tr>
                                                                                            <th></th>
                                                                                            {
                                                                                                verbNumber.includes("singular") && <th>Singular</th>
                                                                                            }
                                                                                            {
                                                                                                verbNumber.includes("plural") && <th>Plural</th>
                                                                                            }
                                                                                        </tr>
                                                                                        {
                                                                                            verbPerson.includes(0) &&
                                                                                            <tr>
                                                                                                <th>1st</th>
                                                                                                {
                                                                                                    (verbNumber.includes("singular")) &&
                                                                                                    <th><input/>{didSubmit && workingObject[voice[0]][gender[0]][mood[0]][tense[0]].singular[0]}</th>
                                                                                                }
                                                                                                {
                                                                                                    (verbNumber.includes("plural")) &&
                                                                                                    <th><input/>{didSubmit && workingObject[voice[0]][gender[0]][mood[0]][tense[0]].plural[0]}</th>
                                                                                                }
                                                                                            </tr>
                                                                                        }
    
                                                                                        {
                                                                                            verbPerson.includes(1) &&
                                                                                            <tr>
                                                                                                <th>2nd</th>
                                                                                                {
                                                                                                    (verbNumber.includes("singular")) &&
                                                                                                    <th><input/>{didSubmit && workingObject[voice[0]][gender[0]][mood[0]][tense[0]].singular[1]}</th>
                                                                                                }
                                                                                                {
                                                                                                    (verbNumber.includes("plural")) &&
                                                                                                    <th><input/>{didSubmit && workingObject[voice[0]][gender[0]][mood[0]][tense[0]].plural[1]}</th>
                                                                                                }
                                                                                            </tr>
                                                                                        }
    
                                                                                        {
                                                                                            verbPerson.includes(2) &&
                                                                                            <tr>
                                                                                                <th>3rd</th>
                                                                                                {
                                                                                                    (verbNumber.includes("singular")) &&
                                                                                                    <th><input/>{didSubmit && workingObject[voice[0]][gender[0]][mood[0]][tense[0]].singular[2]}</th>
                                                                                                }
                                                                                                {
                                                                                                    (verbNumber.includes("plural")) &&
                                                                                                    <th><input/>{didSubmit && workingObject[voice[0]][gender[0]][mood[0]][tense[0]].plural[2]}</th>
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

            <div
                style={{cursor: "pointer"}}
                onClick={() => setDidSubmit(true)}>
                Check {">>"}
            </div>
        </div>

            <div>
                <div>Test me on</div>
                <div>
                    <ControlPanelSection>
                        <div>
                            Forms
                        </div>

                        <div>
                            <ControlInputElement stringValue={"present"} originalArray={verbTense} setter={setVerbTense} genericClickListener={genericClickListener} />
                            <ControlInputElement stringValue={"imperfect"} originalArray={verbTense} setter={setVerbTense} genericClickListener={genericClickListener} />
                            <ControlInputElement stringValue={"perfect"} originalArray={verbTense} setter={setVerbTense} genericClickListener={genericClickListener} />
                            <ControlInputElement stringValue={"pluperfect"} originalArray={verbTense} setter={setVerbTense} genericClickListener={genericClickListener} />
                        </div>
                    </ControlPanelSection>

                    <ControlPanelSection>
                        <div>
                            Number
                        </div>

                        <div>
                            <ControlInputElement stringValue={"singular"} originalArray={verbNumber} setter={setVerbNumber} genericClickListener={genericClickListener} />
                            <ControlInputElement stringValue={"plural"} originalArray={verbNumber} setter={setVerbNumber} genericClickListener={genericClickListener} />
                        </div>
                    </ControlPanelSection>

                    <ControlPanelSection>
                        <div>
                            Person
                        </div>

                        <div>
                            <ControlInputElement stringValue={0} originalArray={verbPerson} setter={setVerbPerson} genericClickListener={genericClickListener} />
                            <ControlInputElement stringValue={1} originalArray={verbPerson} setter={setVerbPerson} genericClickListener={genericClickListener} />
                            <ControlInputElement stringValue={2} originalArray={verbPerson} setter={setVerbPerson} genericClickListener={genericClickListener} />
                        </div>
                    </ControlPanelSection>
                </div>

            </div>
        </div>
    )
}

function ControlInputElement(props: {stringValue: any, originalArray: any[], setter: any, genericClickListener: any}) {
    return (
      <div>
          <input type={"checkbox"} checked={props.originalArray.includes(props.stringValue)}
                 onClick={(e) => props.genericClickListener(
                   props.stringValue , props.originalArray, props.setter, props.originalArray.includes(props.stringValue))}
          />
          {props.stringValue}
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