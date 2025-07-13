function romanNumeralConverter(number) {

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
        [1, "I"]
    ]
    let results = "";

    for (const [value, numeral] of map) {
        while (number >= value) {
            results += numeral
            number -= value
        }
    }
    return results;
}
export default romanNumeralConverter

// results X IV
// number = 14 (-10) -> 4 (-4) -> 0


//results = V + I + I 
//number = 7 (-5) -> 2 (-1) 1 (-1) 0

// M = 1000
// D = 500
// C = 100
// L = 50 
// X = 10 
// V = 5
// I = 1

