import isValidIP from "../functions/validation-dot-decimal";

describe("this function should identify a valid string - pattern of digits and dots - 4 numbers separated three dots - numbers and between 0 - 250", () => {
    test("0.0.0.0 will return true", () => {
        expect(isValidIP("0.0.0.0")).toBe(true);
    })

    test("0.0.0.0.0 has more than 4 numbers so should return false", () => {
        expect(isValidIP("0.0.0.0.0")).toBe(false)
    })

    test("0.0.0 has less than 4 numbers so should return false", () => {
        expect(isValidIP("0.0.0")).toBe(false)
    })

    test("0.0.500.0 has a number greater than 255 so should return false", () => {
        expect(isValidIP("0.0.500.0")).toBe(false)
    })

    test("abc.def.ghi.jkl are not numbers and should return false", () => {
        expect(isValidIP("abc.def.ghi.jkl")).toBe(false);
    })

    test("empty string should return false", () => {
        expect(isValidIP("")).toBe(false)
    })

    test("numbers with leading 0 should be false", () => {
        expect(isValidIP("01.02.03.04")).toBe(false)
    })

    test("a leading empty space should return false", () => {
        expect(isValidIP(" 1.2.3.4")).toBe(false)
    })

    test("mixture of numbers and letters should return false", () => {
        expect(isValidIP("1e1.2a2.3t4.4y8")).toBe(false)
    })

    test("/n newline will return false", () => {
        expect(isValidIP("/n1.2.3.4")).toBe(false);
    })

    test("2.3.4.5/n will return false", () => {
        expect(isValidIP("2.3.4.5/n")).toBe(false)
    })

    test("-3.2.5.6 will return false (negative number)", () => {
        expect(isValidIP("-3.2.5.6")).toBe(false)
    })

    test("1,2,3,4", () => {
        expect(isValidIP("1,2,3,4")).toBe(false)
    })

    test("an ending empty space should return false", () => {
        expect(isValidIP("1.2.3.4 ")).toBe(false)
    })

    test("4 numbers separated by dots - one 255 - should return true", () => {
        expect(isValidIP("12.255.56.1")).toBe(true)
    })

    test("number string with 256 should return false", () => {
        expect(isValidIP("256.1.2.3")).toBe(false)
    })

})

// assert.strictEqual(isValidIP('256.1.2.3'      ), false);
// assert.strictEqual(isValidIP('1.2.3.4.5'      ), false);
// assert.strictEqual(isValidIP('123,45,67,89'   ), false);
// assert.strictEqual(isValidIP('1e0.1e1.1e2.2e2'), false);
// assert.strictEqual(isValidIP(' 1.2.3.4'       ), false);
// assert.strictEqual(isValidIP('1.2.3.4 '       ), false);
// assert.strictEqual(isValidIP('12.34.56.-7'    ), false);
// assert.strictEqual(isValidIP('1.2.3.4\n'      ), false);
// assert.strictEqual(isValidIP('\n1.2.3.4'      ), false);