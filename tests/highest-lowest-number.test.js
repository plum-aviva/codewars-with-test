import highAndLow from "../functions/highest-lowest-number";

describe("find highest and lowest number from a string", () => {
    test("test 1", () => {
        expect(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")).toBe("42 -9")
    })

    test("test 2", () => {
        expect(highAndLow("1 2 3")).toBe("3 1")
    })

})

