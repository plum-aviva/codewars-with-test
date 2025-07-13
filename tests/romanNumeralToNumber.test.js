import romanNumeralToNumber from "../functions/romanNumeralToNumber";

describe("this function converts Roman numerals to Arabic numbers", () => {

    test("I = 1", () => {
        expect(romanNumeralToNumber("I")).toBe(1);
    })

})