function isValidIP(str) {
    const array = str.split(".");

    let numberArray = [];

    let result = true;

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 1 && array[i][0] === "0") {
            return false;
        }
        if (array[i].includes(" ")) {
            return false
        }
        let toNumber = Number(array[i]);

        numberArray.push(toNumber);
    }

    if (numberArray.length != 4) {
        result = false;
    }

    for (let j = 0; j < numberArray.length; j++) {
        if (isNaN(numberArray[j]) || numberArray[j] > 255 || numberArray[j] < 0) {
            result = false;
        }


    }



    return result;
}

export default isValidIP


// turn string into an array 
// loop through to check array.length = 4
// loop through to check value of numbers is equal to or lower than 255
