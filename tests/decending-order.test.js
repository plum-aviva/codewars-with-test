import descendingOrder from "../functions/decending-order";

describe("a series of input numbers sorted into decending order", () => {
    test("0 should return 0", () => {
        expect(descendingOrder(0)).toBe(0)
    })

    test("1 should return 1", () => {
        expect(descendingOrder(1)).toBe(1)
    })

    test("12 should return 21", () => {
        expect(descendingOrder(12)).toBe(21)
    })

    test("12345 should return 54321", () => {
        expect(descendingOrder(12345)).toBe(54321)
    })

    test("36194 to be 96431", () => {
        expect(descendingOrder(36194)).toBe(96431)
    })

    test("964 to be 964", () => {
        expect(descendingOrder(964)).toBe(964)
    })

})