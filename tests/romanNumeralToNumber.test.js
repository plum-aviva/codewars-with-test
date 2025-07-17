import romanNumeralToNumber from "../functions/romanNumeralToNumber";

describe("this function converts Roman numerals to Arabic numbers", () => {

    test("I = 1", () => {
        expect(romanNumeralToNumber("I")).toBe(1);
    })

    test("II = 2", () => {
        expect(romanNumeralToNumber("II")).toBe(2);
    })

    test("XVI = 16", () => {
        expect(romanNumeralToNumber("XVI")).toBe(16);
    })

    test("IV = 4", () => {
        expect(romanNumeralToNumber("IV")).toBe(4)
    })

})