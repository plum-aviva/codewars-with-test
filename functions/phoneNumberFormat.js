function createPhoneNumber(numbers) {
    let bracketsBit = ""
    let middleBit = ""
    let endBit = ""

    for (let i = 0; i < 3; i++) {
        bracketsBit += numbers[i].toString()
        console.log(bracketsBit)
    }

    for (let j = 3; j < 7; j++) {
        middleBit += numbers[j].toString()
        console.log(middleBit)
    }

    for (let k = 7; k < numbers.length; k++) {
        endBit += numbers[k].toString()
        console.log(endBit)
    }

    return `(${bracketsBit}) ${middleBit}-${endBit}`

}

export default createPhoneNumber

console.log(createPhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))


numbers[0]
numbers[1]
numbers[2]
