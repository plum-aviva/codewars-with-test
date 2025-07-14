function order(words) {

    let wordArray = words.split(" ")
    wordArray.sort((a, b) => {

        const numA = getNumber(a);
        const numB = getNumber(b);

        return numA - numB;
    })

    // numbers.sort((a, b) => a - b);
    return wordArray.join(" ");

}



// make string into an array
// loop through and find each number 
// create new array in which numbers are in order 
// join together as a string 


const getNumber = (str) => {

    for (let character of str) {
        if (!isNaN(character)) {
            return Number(character)

        }
    }

}

export default order
console.log(getNumber("he8llo"))
//loop through string
// includes method to search for numbers 