/**
 * Compares two words, character by character. Highlight differences.
 * The testedWord is displayed in deserialized form.
 *
 * @param props
 * @constructor
 */
export function CompareTwoWords(props: {testedWord: string, testingWord: string}) {
    return (
        <span style={{marginLeft: 5}}>
            {
                props.testedWord.split("").map((char, index) => {
                    console.log(char, props.testingWord[index])

                    return <span
                        key={index}
                        style={{
                            fontWeight: char===props.testingWord[index] ? 400 : "bold",
                            color: char===props.testingWord[index] ? "black" : "red"
                        }}
                    >{char}</span>
                })
            }
        </span>

    )
}