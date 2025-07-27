import missingWord from "../functions/codeWord";

describe("using letter from the array as index find mystery word in the string", () => {
    test("'hill', [0, 1] will return hi", () => {
        expect(missingWord([0, 1], 'hill')).toBe('hi')
    })

    test("[1, 4, 5, 9], Plum Victoria Plum will return 'lvir'", () => {
        expect(missingWord([1, 4, 5, 9], "Plum Victoria Plum")).toBe("lvir")
    })

})