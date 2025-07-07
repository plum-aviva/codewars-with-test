function highAndLow(numbers) {

    let numberArrayString = numbers.split(" ")
    let highest = Number(numberArrayString[0])

    let lowest = Number(numberArrayString[0])

    for (const nums of numberArrayString) {
        if (Number(nums) > highest) {
            highest = Number(nums)
        }
        if (Number(nums) < lowest) {
            lowest = Number(nums)
        }
    }
    return highest.toString() + " " + lowest.toString()

}

export default highAndLow