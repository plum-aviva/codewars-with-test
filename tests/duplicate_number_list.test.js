import group from "../functions/duplicate_number_list";



describe("organising duplicate numbers into arrays", () => {



    test("empty string should return empty string", () => {
        expect(group([])).toEqual([])

    })

    test("array with no duplicates will return an array of each number with one in", () => {
        expect(group([1, 2, 3])).toEqual([[1], [2], [3]])
    })

    test("[1, 1, 1, 2, 3, 3] to be [[1, 1, 1], [2], [3, 3]]", () => {
        expect(group([1, 1, 1, 2, 3, 3])).toEqual([[1, 1, 1], [2], [3, 3]])
    })

})


//   test("[3, 2, 6, 2, 1, 3] should be [[3, 3], [2, 2], [6], [1]])")

