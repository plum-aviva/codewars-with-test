import filter_list from "../functions/listFiltering";

describe("a list of numbers and strings filtered to only include numbers", () => {
    test("[1, 'a'] will return [1]", () => {
        expect(filter_list([1, 'a'])).toEqual([1]);
    })

    test("[1, 'a', 45, 'abc'] will return [1, 45]", () => {
        expect(filter_list([1, 'a', 45, 'abc'])).toEqual([1, 45]);
    })

    test("[1,2,'aasf','1','123',123] to equal [1, 2, 123]", () => {
        expect(filter_list([1, 2, 'aasf', '1', '123', 123])).toEqual([1, 2, 123])
    })

})

// deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');