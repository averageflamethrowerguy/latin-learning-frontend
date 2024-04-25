/**
 * A string test strategy that doesn't penalize long marks.
 * 
 * @param stringToTest 
 * @param validationString 
 * @returns 
 */
export default function advancedCheckString(stringToTest: string, validationString: string) {
    if (stringToTest.length !== validationString.length) {
        return false
    }

    for (let i=0; i<stringToTest.length; i++) {
        let didPass = false
        if (stringToTest[i] === validationString[i]) {
            didPass = true
        }

        else if (stringToTest[i] === findAlternate(validationString[i])) {
            didPass = true
        }

        else if (findAlternate(stringToTest[i]) === validationString[i]) {
            didPass = true
        }
        
        if (!didPass) {
            return false
        }
    }

    return true
}

function findAlternate(letter: string) {
    if (letter === 'a') {
        return 'ā'
    }
    if (letter === 'e') {
        return 'ē'
    }
    if (letter === 'u') {
        return 'ū'
    }
    if (letter === 'i') {
        return 'ī'
    }
    if (letter === 'o') {
        return 'ō'
    }
    if (letter === 'y') {
        return '`y'
    } 
    return letter
}