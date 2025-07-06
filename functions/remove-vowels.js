function disemvowel(str) {
    let newString = ""
    let vowels = ["a", "e", "i", "o", "u"]


    for (let j = 0; j < str.length; j++) {
        if (!vowels.includes(str[j].toLowerCase())) {

            newString += str[j];

        }


    }

    return newString;
}

export default disemvowel