import disemvowel from "../functions/remove-vowels";

describe("remove vowels from a string", () => {

    test("a string with no vowels is unchanged", () => {
        expect(disemvowel("bcd")).toBe("bcd")
    })

    test("a string with the letter a will be returned with no a", () => {
        expect(disemvowel("cat")).toBe("ct")
    })

    test("an empty string will return an empty string", () => {
        expect(disemvowel("")).toBe("")
    })

    test("the word pizza will return pzz", () => {
        expect(disemvowel("pizza")).toBe("pzz")
    })

    test("the word balloon will return blln", () => {
        expect(disemvowel("balloon")).toBe("blln")
    })


    test("This website is for losers will return ths wbst s fr lsrs LL!", () => {
        expect(disemvowel("This website is for losers LOL!")).toBe("Ths wbst s fr lsrs LL!")
    })

})