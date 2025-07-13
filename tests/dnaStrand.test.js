import dnaStrand from "../functions/dnaStrand";

describe("this is about DNA - the input will result in the opposite string A -> T, C-> G ", () => {

    test("A should return as T", () => {
        expect(dnaStrand("A")).toBe("T");
    })

    test("C should return as G", () => {
        expect(dnaStrand("C")).toBe("G");
    })

    test("AA should return as TT", () => {
        expect(dnaStrand("AA")).toBe("TT");
    })

    test("AC should return as TG", () => {
        expect(dnaStrand("A")).toBe("T");
    })

})