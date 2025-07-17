import moveZeros from "../functions/zero_to_end";

describe("given an array move all 0's to the end of list", () => {
    test("[1, 2, 3] will return [1, 2, 3]", () => {
        expect(moveZeros([1, 2, 3])).toEqual([1, 2, 3])
    })

    test("[1, 2, 0, 3] will return [1, 2, 3, 0]", () => {
        expect(moveZeros([1, 2, 0, 3])).toStrictEqual([1, 2, 3, 0])
    })

    test("[1, 2, 0, 0, 0, 3] will return [1, 2, 3, 0, 0, 0]", () => {
        expect(moveZeros([1, 2, 0, 0, 0, 3])).toStrictEqual([1, 2, 3, 0, 0, 0])
    })

})