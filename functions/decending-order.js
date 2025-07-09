function descendingOrder(n) {
    let numberAsString = n.toString();
    let numberArray = [];


    for (let i = 0; i < numberAsString.length; i++) {
        numberArray.push(Number(numberAsString[i]));
    }
    console.log(numberArray);

    for (let item of numberArray) {
        for (let i = 0; i < numberArray.length; i++) {
            if (numberArray[i] < numberArray[i + 1]) {
                [numberArray[i], numberArray[i + 1]] = [
                    numberArray[i + 1],
                    numberArray[i],
                ];
            }
        }
    }
    let result = numberArray.toString().replace(/,/g, "");
    const resultNumber = Number(result)
    return resultNumber;
}

export default descendingOrder