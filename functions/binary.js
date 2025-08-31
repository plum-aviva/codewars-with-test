const binaryToChar = (binaryString) => {
    let result = 0;
    let multiplier = 1;

    for (let i = binaryString.length - 1; i >= 0; i--) {
        let character = binaryString[i]
        if (character === "1") {
            result += multiplier;

        }
        multiplier *= 2
    }
    return String.fromCharCode(result);

}


function binaryToString(binary) {



    let binaryArray = binary.split("0b")
    console.log(binaryArray);
    binaryArray.shift()
    console.log(binaryArray);
    let answerString = ""

    for (let i = 0; i < binaryArray.length; i++) {
        let answer = binaryToChar(binaryArray[i])
        console.log(answer);
        answerString += answer
    }


    return answerString


}

console.log(binaryToString("0b10000110b11000010b1110100"))