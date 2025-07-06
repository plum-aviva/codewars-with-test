import sameXO from "../functions/same-x-o";

describe("a function that checks if there are the same number of x and o in a string", () => {

    test("string xo have equal numbers and will return true", () => {
        expect(sameXO("xo")).toBe(true);
    })

    test("string xxo have unequal numbers of x and o and will return false", () => {
        expect(sameXO("xxo")).toBe(false);
    })

    test("empty string should return true as still equal numbers of x o", () => {
        expect(sameXO("")).toBe(true);
    })

    test("different combination of uppercase and lowercase x o", () => {
        expect(sameXO("XXOo")).toBe(true);
    })

})


