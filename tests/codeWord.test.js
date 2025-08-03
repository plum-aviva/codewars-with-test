import missingWord from "../functions/codeWord";

describe("using letter from the array as index find mystery word in the string", () => {
    test("'hill', [0, 1] will return hi", () => {
        expect(missingWord([0, 1], 'hill')).toBe('hi')
    })

    test("[3, 5, 6], Plum eats Plum's plums will return 'mat'", () => {
        expect(missingWord([3, 5, 6], "Plum eats Plum's plums")).toBe("mat")
    })

    test("[4, 3, 0], 'sit on chair' will return 'son'", () => {
        expect(missingWord([4, 3, 0], "sit on chair")).toBe("son")
    })

    test(" [0, 4, 3], 'ca  t' will return 'No mission today'", () => {
        expect(missingWord([0, 4, 3], 'ca  t')).toBe("No mission today")
    })

    test("[29, 31, 8], 'The quick brown fox jumps over the lazy dog' to return 'bay'", () => {
        expect(missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog")).toBe('bay')
    })

})