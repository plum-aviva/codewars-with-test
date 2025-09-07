function sumTwoSmallestNumbers(numbers) {

    let lowestNumber = numbers[0];
    let lowestNumberIndex = 0;
    console.log("hello")

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < lowestNumber) {
            lowestNumber = numbers[i];
            lowestNumberIndex = i;
        }
    }

    let newArray = [...numbers.slice(0, lowestNumberIndex), ...numbers.slice(lowestNumberIndex + 1)]
    console.log(lowestNumberIndex, "index")
    console.log(newArray);
    let nextLowestNumber = newArray[0];
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] < nextLowestNumber) {
            nextLowestNumber = newArray[i];
        }
    }

    let sumOfLowNumbers = lowestNumber + nextLowestNumber;
    return sumOfLowNumbers;

}

console.log(sumTwoSmallestNumbers([1, 1, 3]))

export default sumTwoSmallestNumbers;

// numbers will be an array - need to identify two lowest numbers 