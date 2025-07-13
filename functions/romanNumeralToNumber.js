function romanNumeralToNumber(romanNumeral) {
    const map = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"],
    ];

    for (const [value, numeral] of map) {
        if (romanNumeral === numeral) {
            return value;
        }
    }
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
