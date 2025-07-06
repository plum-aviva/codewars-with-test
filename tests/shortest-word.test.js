import findShort from "../functions/shortest-word";

describe("find shortest word from a string", () => {
    test("the string door will return door", () => {
        expect(findShort("door")).toBe("door")
    })

    test("the string door number will return door", () => {
        expect(findShort("door number")).toBe("door")
    })

    test("the string door number one will return one", () => {
        expect(findShort("door number one")).toBe("one")
    })

})