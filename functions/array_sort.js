function scramble(str, arr) {



    let newArray = new Array(str.length)

    for (let i = 0; i < arr.length; i++) {
        let newCharacterIndex = arr[i]
        newArray[newCharacterIndex] = str[i]

    }

    return newArray.join(""); // your code here
};

console.log(scramble('abc', [1, 2, 0]))

export default scramble



// create a[1];

// string 
// break the string down into seperate bits 
// is there a way of giving something an index ? indexOf()
// string[2]
//loop through the string - to get all the letters 
// loop through the array - to get the number related to the letter 
// match the letter to the number and use the number to index 

