import boolToWord from "../functions/boolean-to-word";

describe("testing a function that converts boolean to word (yes / no)", () => {


    test("true returns yes", () => {
        expect(boolToWord(true)).toBe("Yes")

    })

    test("false returns no", () => {
        expect(boolToWord(false)).toBe("No")

    })

})