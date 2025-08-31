import isAN from "../functions/isAN";

describe("tests if value is a number - if it is return true, if not return false", () => {
    test("3 should return true", () => {
        expect(isAN(3)).toBe(true);
    })

    test("Infinity should return true", () => {
        expect(isAN(Infinity)).toBe(true);
    })

    test("'cat' should return false", () => {
        expect(isAN("cat")).toBe(false);
    })

    test("'123' should return false", () => {
        expect(isAN("123")).toBe(false);
    })

})