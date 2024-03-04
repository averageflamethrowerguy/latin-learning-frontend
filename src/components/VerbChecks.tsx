import {useState} from "react";
import {verbEndingStructure, verbFormList} from "./wordConfiguration";
import { CompareTwoWords } from "./CompareTwoWords";
import styled from "styled-components";
import { WordInputElement } from "./WordInputElement";

export function VerbChecks(props: {}) {
    // for now, we'll just show the verb chart

    const [inEndingMode, setInEndingMode] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)
    const [verbIndex, setVerbIndex] = useState(0)
    
    const [verbPerson, setVerbPerson] = useState([0, 1, 2])
    const [verbNumber, setVerbNumber] = useState(["singular", "plural"])
    const [verbTense, setVerbTense] = useState(["future", "future perfect"])
    const [verbMood, setVerbMood] = useState(["indicative", "subjunctive"])
    const [verbGender, setVerbGender] = useState(["masculine"])
    const [verbVoice, setVerbVoice] = useState(["active", "passive"])
    
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
            {
                Object.entries(workingObject).map(voice => {
                    if (verbVoice.includes(voice[0])) {
                        return (
                          <div>
                              <div style={{fontWeight: "bold"}}>
                                  {voice[0]}
                              </div>
                              {
                                  Object.entries(voice[1]).map(gender => {
                                      if (verbGender.includes(gender[0])) {
                                          return (
                                            <div>
                                                {
                                                    Object.entries(gender[1]).map(mood => {
                                                        if (verbMood.includes(mood[0])) {
                                                            console.log(mood[0])
                                                            console.log(mood[1])

                                                            return (
                                                              <div>
                                                                  <div>
                                                                      {mood[0]}
                                                                  </div>
                                                                  {
                                                                      Object.entries(mood[1]).map(tense => {
                                                                          if (verbTense.includes(tense[0])) {
                                                                              return (
                                                                                <TenseMatrix>
                                                                                    <div>{tense[0]}</div>
                                                                                    <table style={{textAlign: "left"}}>
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
                                                                                                <th style={{width: 35}}>1st</th>
                                                                                                {
                                                                                                    (verbNumber.includes("singular")) &&
                                                                                                    <WordInputElement correctAnswer={workingObject[voice[0]][gender[0]][mood[0]][tense[0]].singular[0]}
                                                                                                                      didSubmit={didSubmit} />
                                                                                                }
                                                                                                {
                                                                                                    (verbNumber.includes("plural")) &&
                                                                                                    <WordInputElement correctAnswer={workingObject[voice[0]][gender[0]][mood[0]][tense[0]].plural[0]}
                                                                                                                      didSubmit={didSubmit} />
                                                                                                }
                                                                                            </tr>
                                                                                        }
    
                                                                                        {
                                                                                            verbPerson.includes(1) &&
                                                                                            <tr>
                                                                                                <th style={{width: 35}}>2nd</th>
                                                                                                {
                                                                                                    (verbNumber.includes("singular")) &&
                                                                                                    <WordInputElement correctAnswer={workingObject[voice[0]][gender[0]][mood[0]][tense[0]].singular[1]}
                                                                                                                      didSubmit={didSubmit} />
                                                                                                }
                                                                                                {
                                                                                                    (verbNumber.includes("plural")) &&
                                                                                                    <WordInputElement correctAnswer={workingObject[voice[0]][gender[0]][mood[0]][tense[0]].plural[1]}
                                                                                                                      didSubmit={didSubmit} />
                                                                                                }
                                                                                            </tr>
                                                                                        }
    
                                                                                        {
                                                                                            verbPerson.includes(2) &&
                                                                                            <tr>
                                                                                                <th style={{width: 35}}>3rd</th>
                                                                                                {
                                                                                                    (verbNumber.includes("singular")) &&
                                                                                                    <WordInputElement correctAnswer={workingObject[voice[0]][gender[0]][mood[0]][tense[0]].singular[2]}
                                                                                                                      didSubmit={didSubmit} />
                                                                                                }
                                                                                                {
                                                                                                    (verbNumber.includes("plural")) &&
                                                                                                    <WordInputElement correctAnswer={workingObject[voice[0]][gender[0]][mood[0]][tense[0]].plural[2]}
                                                                                                                      didSubmit={didSubmit} />
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

        </div>
            <div>
                <div style={{backgroundColor: "white", padding: 10, borderRadius: 10, margin: 10}}>
                    {/*<div onClick={() => setInEndingMode(false)}>Check Verbs</div>*/}
                    <div style={{fontSize: 20}}>
                        Review Verbs
                    </div>

                    {!inEndingMode &&
                        <div style={{marginTop: 10}}>
                            {workingObject.active.masculine.indicative.present.singular[0]},
                            {workingObject.active.masculine.indicative.infinitive},
                            {workingObject.active.masculine.indicative.perfect.singular[0]}
                        </div>
                    }

                    <div style={{display: "flex", justifyContent: "space-between", marginTop: 10}}>
                        <div
                            style={{cursor: "pointer"}}
                            onClick={() => setDidSubmit(!didSubmit)}>
                            Check {">>"}
                        </div>

                        {
                            !inEndingMode &&
                            <div
                                style={{cursor: "pointer"}}
                                onClick={() => {
                                setVerbIndex(verbIndex+1)
                                setDidSubmit(false)
                            }}>
                                Next Verb {">>"}
                            </div>
                        }
                    </div>
                </div>

                <div style={{backgroundColor: "white", padding: 10, borderRadius: 10, margin: 10}}>
                    <div style={{fontSize: 20}}>Test me on</div>
                    <div style={{display: "flex", flexWrap: "wrap"}}>
                        <ControlPanelSection>
                            <div>
                                Forms
                            </div>

                            <div>
                                <ControlInputElement stringValue={"present"} originalArray={verbTense} setter={setVerbTense} genericClickListener={genericClickListener} />
                                <ControlInputElement stringValue={"imperfect"} originalArray={verbTense} setter={setVerbTense} genericClickListener={genericClickListener} />
                                <ControlInputElement stringValue={"perfect"} originalArray={verbTense} setter={setVerbTense} genericClickListener={genericClickListener} />
                                <ControlInputElement stringValue={"pluperfect"} originalArray={verbTense} setter={setVerbTense} genericClickListener={genericClickListener} />
                                <ControlInputElement stringValue={"future"} originalArray={verbTense} setter={setVerbTense} genericClickListener={genericClickListener} />
                                <ControlInputElement stringValue={"future perfect"} originalArray={verbTense} setter={setVerbTense} genericClickListener={genericClickListener} />
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

                        <ControlPanelSection>
                            <div>
                                Mood
                            </div>

                            <div>
                                <ControlInputElement stringValue={"indicative"} originalArray={verbMood} setter={setVerbMood} genericClickListener={genericClickListener} />
                                <ControlInputElement stringValue={"subjunctive"} originalArray={verbMood} setter={setVerbMood} genericClickListener={genericClickListener} />
                            </div>
                        </ControlPanelSection>

                        <ControlPanelSection>
                            <div>
                                Voice
                            </div>

                            <div>
                                <ControlInputElement stringValue={"active"} originalArray={verbVoice} setter={setVerbVoice} genericClickListener={genericClickListener} />
                                <ControlInputElement stringValue={"passive"} originalArray={verbVoice} setter={setVerbVoice} genericClickListener={genericClickListener} />
                            </div>
                        </ControlPanelSection>
                    </div>
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