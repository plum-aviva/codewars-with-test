function encode(plaintext) {

    const alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    let resultString = ""


    for (let i = 0; i < plaintext.length; i++) {
        if (alphabetArray.includes(plaintext[i].toLowerCase())) {
            let indexAlphabet = alphabetArray.indexOf(plaintext[i].toLowerCase())
            if (indexAlphabet % 2 === 0) {
                resultString += "0"
            } else if (indexAlphabet % 2 === 1) {
                resultString += "1"
            }
        } else {
            resultString += plaintext[i]
        }
    }
    return resultString
}

export default encode