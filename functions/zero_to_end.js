function moveZeros(arr) {


    let nonZeroArray = []
    let zeroArray = []
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroArray.push(arr[i])
        } else {
            nonZeroArray.push(arr[i])
        }
    }

    result = nonZeroArray.concat(zeroArray)

    return result
}

export default moveZeros

console.log(moveZeros([1, 2, 0, 3]))

// console.log(moveZeros([1, 2, 0, 3]))
// console.log(moveZeros([1, 0, 0, 0, 3]))

// array = [1, 0, 0, 0, 3]
// i=0 
// false 
// i = 1 
// true (so does two operations)
// array = [1, 0, 0, 3]
// array = [1, 0, 0, 3, 0]

//i = 2 
// array 
// true
// [1, 0, 3, 0]
// [1, 0, 3, 0, 0]
// i = 3
// true 
// [1, 0, 3, 0]
// [1, 0, 3, 0, 0]