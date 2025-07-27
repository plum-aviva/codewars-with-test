function missingWord(nums, str) {
    let codeWord = ""
    let clueArray = str.split(" ");
    let clueString = clueArray.join("")

    for (let i = 0; i < nums.length; i++) {
        let clueIndex = nums[i];
        let clueLetter = clueString[clueIndex];
        codeWord += clueLetter
    }
    return codeWord.toLowerCase();

}

export default missingWord