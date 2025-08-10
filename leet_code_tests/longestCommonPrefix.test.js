import longestCommonPrefix from "../leet_Code_functions/longestCommonPrefix";

describe("there are an array of 3 words - if the words start with the same letters return those letters - if not return an empty string", () => {
    test("hill, hi, hippy will return hi", () => {
        expect(longestCommonPrefix(["hill", "hi", "hippy"])).toBe("hi")
    })

    test("an empty string will return an empty string", () => {
        expect(longestCommonPrefix("")).toBe("")
    })
})