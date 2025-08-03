function missingWord(nums, str) {
    let codeWord = "";
    let clueArray = str.split(" ");
    let clueString = clueArray.join("");
    let sortedNums = nums.sort((a, b) => a - b);
    console.log(nums);
    console.log(sortedNums);

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] > clueString.length) {
            return "No mission today";
        }
    }

    for (let i = 0; i < sortedNums.length; i++) {
        let clueIndex = sortedNums[i];
        let clueLetter = clueString[clueIndex];
        codeWord += clueLetter;
    }
    return codeWord.toLocaleLowerCase();
}




export default missingWord

// if it is impossible to find a code word - return string to say it won't work - homework 
// 2 more codewars 
// react - plum's plums website!!!! 


