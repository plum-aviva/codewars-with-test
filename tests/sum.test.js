import sum from "../functions/sum";


describe("sum function", () => {
    // 'test' (or 'it') defines an individual test case
    test("adds 1 + 2 to equal 3", () => {
        // 'expect' is used for assertions
        expect(sum(1, 2)).toBe(3);
    });

    test("adds 0 + 0 to equal 0", () => {
        expect(sum(0, 0)).toBe(0);
    });

    test("adds negative numbers correctly", () => {
        expect(sum(-1, -5)).toBe(-6);
    });

    test("adds a positive and a negative number", () => {
        expect(sum(5, -2)).toBe(3);
    });
});