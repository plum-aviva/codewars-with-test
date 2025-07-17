function group(arr) {

    let arrSet = new Set(arr);

    let result = []


    for (let number of arrSet) {
        let subArray = [];
        for (let i = 0; i < arr.length; i++) {
            if (number === arr[i]) {
                subArray.push(arr[i])
            }

        }
        result.push(subArray);
    }
    return result;
}

export default group





// identify all the different numbers - using a set 
// nested loop - to pick out the identical numbers - so if number in set and loop the same - place them in an array 
// put the separate arrays together in a "parent" array