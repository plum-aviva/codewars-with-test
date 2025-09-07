import sumTwoSmallestNumbers from "../functions/twoLowestIntegerSum";

describe("given an array of numbers produce the sum of the two lowest numbers", () => {
    test("[1, 2, 3] will return 3", () => {
        expect(sumTwoSmallestNumbers([1, 2, 3])).toBe(3)
    })
})