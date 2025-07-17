function romanNumeralToNumber(romanNumeral) {
    let sum = 0;
    let previousValue = 0;

    const map = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    };

    for (let i = romanNumeral.length - 1; i >= 0; i--) {
        let currentValue = map[romanNumeral[i]];
        if (currentValue < previousValue) {
            sum -= currentValue;
        } else {
            sum += currentValue;
        }
        previousValue = currentValue;
    }

    return sum;
}



export default romanNumeralToNumber


//  let results = "";

//     for (const [value, numeral] of map) {
//         while (number >= value) {
//             results += numeral
//             number -= value
//         }
//     }
//     return results;
