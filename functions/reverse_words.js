

function reverseWords(str) {
    // can I turn spaces into something else?
    let resultTemplate = str.split(" ").join("+-+");


    let templateArray = resultTemplate.split("+");


    let resultString = "";
    let finalString = "";

    for (let words of templateArray) {
        if (words.length > 0) {
            for (let i = words.length - 1; i >= 0; i--) {
                resultString += words[i];
            }
        }
    }
    finalString = resultString.split("-").join(" ");
    return finalString;
}



export default reverseWords