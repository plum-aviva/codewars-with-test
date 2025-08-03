import encode from "../functions/encode";

describe("letters of the alphabet are encoded - letters with an odd index are replaced with 1, letters with an even index are replaced with 0, letters which are not alphabet are unchanged", () => {
    test("a will return 0", () => {
        expect(encode("a")).toBe("0")
    })

    test("abc! will return 010!", () => {
        expect(encode("abc!")).toBe("010!")
    })

    test("AbC d! will return 010 1!", () => {
        expect(encode("AbC d!")).toBe("010 1!")
    })

}
)