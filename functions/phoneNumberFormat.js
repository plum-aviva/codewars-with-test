function createPhoneNumber(numbers) {
    let bracketsBit = ""
    let middleBit = ""
    let endBit = ""

    for (let i = 0; i < 3; i++) {
        bracketsBit += numbers[i].toString()
        console.log(bracketsBit)
    }

    for (let j = 3; j < 6; j++) {
        middleBit += numbers[j].toString()
        console.log(middleBit)
    }

    for (let k = 6; k < numbers.length; k++) {
        endBit += numbers[k].toString()
        console.log(endBit)
    }

    return `(${bracketsBit}) ${middleBit}-${endBit}`

}

export default createPhoneNumber