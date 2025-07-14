// function romanNumeralToNumber(romanNumeral) {
//     let romanNumaralArray = [];
//     let sum = 0;

//     for (let i = 0; i < romanNumeral.length; i++) {
//         romanNumaralArray.push(romanNumeral[i]);
//     }

//     const map = [
//         [1000, "M"],
//         [500, "D"],
//         [100, "C"],
//         [50, "L"],
//         [10, "X"],
//         [5, "V"],
//         [1, "I"],
//     ];

//     for (let j = 0; j < romanNumaralArray.length; j++) {
//         for (const [value, numeral] of map) {
//             if (romanNumaralArray[j] === numeral) {
//                 if (romanNumaralArray[j] >= romanNumaralArray[j + 1])
//                     sum = sum + value;
//             }
//         }
//     }
//     return sum;
// }



// export default romanNumeralToNumber


//  let results = "";

//     for (const [value, numeral] of map) {
//         while (number >= value) {
//             results += numeral
//             number -= value
//         }
//     }
//     return results;
