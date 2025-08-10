const isPalindrome = (x) => {

    const numberString = x.toString()

    let numberBackwards = ""

    for (let i = numberString.length - 1; i >= 0; i--) {
        numberBackwards += numberString[i];
    }

    if (numberBackwards === numberString) {
        return true
    } else {
        return false
    }

}

console.log(isPalindrome(1221));

export default isPalindrome