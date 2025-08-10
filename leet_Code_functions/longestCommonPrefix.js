const longestCommonPrefix = (strs) => {

    let results = ""
    let shortestWordLength = strs[0].length

    for (let i=0; i< strs.length; i++) {
        if (strs[i].length < shortestWordLength) {
            shortestWordLength = strs[i].length
        }
    }


if (strs.length === 1) {
    return strs[0]
}

if (strs.length === 2) {
     for (let i = 0; i < shortestWordLength; i++) {
        if (strs[0][i] === strs[1][i]) {
            results += strs[0][i]
          
        } else {
            return results
        }
    }
}

    for (let i = 0; i < shortestWordLength; i++) {
        if (strs[0][i] === strs[1][i] && strs[1][i] === strs[2][i]) {
            results += strs[0][i]
          
        } else {
            return results
        }
    }

    return results

}

console.log(longestCommonPrefix(["hello", "hellicoptor"]));

export default longestCommonPrefix



//     const longestCommonPrefix = (strs) => {
//   let shortestWord = "";
//   let results = "";
//   let currentWord = "";
//   let nextWord = "";

//   for (let i = 0; i < strs.length - 1; i++) {
//     currentWord = strs[i];
//     console.log(currentWord + " " + "current word");
//     nextWord = strs[i + 1];
//     console.log(nextWord + " " + "nextWord");

//     if (currentWord.length < nextWord.length) {
//       shortestWord = currentWord;
//       console.log(shortestWord + " " + "shortest word");
//     } 

 

//   }
// };

// const longestCommonPrefix = (strs) => {

//     let results = ""
//     let shortestWordLength = strs[0].length

//     for (let i=0; i< strs.length; i++) {
//         if (strs[i].length < shortestWordLength) {
//             shortestWordLength = strs[i].length
//         }
//     }

// console.log(shortestWordLength)

//     for (let i = 0; i < shortestWordLength; i++) {
//         if (strs[0][i] === strs[1][i] && strs[1][i] === strs[2][i]) {
//             results += strs[0][i]
          
//         } else {
//             return results
//         }
//     }

//     return results

// }