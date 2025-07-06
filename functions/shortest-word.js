function findShort(s) {



    let splitWord = s.split(" ")
    let shortestWord = splitWord[0]

    for (let i = 0; i < splitWord.length; i++) {
        if (shortestWord.length > splitWord[i].length) {
            shortestWord = splitWord[i]
        }


    }


    return shortestWord
}

export default findShort


// string "door number"
// count the length of each word 
