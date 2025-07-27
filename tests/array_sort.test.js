import scramble from "../functions/array_sort";

describe("input is an string and an array - string needs to be reordered inline with numbers of array as index", () => {
    test("'a', [0] will return 'a", () => {
        expect(scramble('a', [0])).toBe('a')
    })

    test("'ab', [1,0] will return 'ba", () => {
        expect(scramble('ab', [1, 0])).toBe('ba')
    })
})