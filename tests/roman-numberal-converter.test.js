import romanNumeralConverter from "../functions/roman-numeral-converter";

describe("function that converts arabic numbers into roman numerals", () => {
    test("1 converts to I", () => {
        expect(romanNumeralConverter(1)).toBe("I")
    })

    test("2 = II", () => {
        expect(romanNumeralConverter(2)).toBe("II")
    })

    test("4 = IV", () => {
        expect(romanNumeralConverter(4)).toBe("IV")
    })

    test("5 = V", () => {
        expect(romanNumeralConverter(5)).toBe("V")
    })

    test("7 = VII", () => {
        expect(romanNumeralConverter(7)).toBe("VII")
    })

    test("9 = IX", () => {
        expect(romanNumeralConverter(9)).toBe("IX")
    })

    test("10 = X", () => {
        expect(romanNumeralConverter(10)).toBe("X")
    })

    test("14 = XIV", () => {
        expect(romanNumeralConverter(14)).toBe("XIV")
    })

    test("2025 = MMXXV", () => {
        expect(romanNumeralConverter(2025)).toBe("MMXXV")
    })

    test("2487 = MMCDLXXXVII", () => {
        expect(romanNumeralConverter(2487)).toBe("MMCDLXXXVII")
    })

})