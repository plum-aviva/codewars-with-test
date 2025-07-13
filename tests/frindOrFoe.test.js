import friend from "../functions/friendOrFoe";

describe("filters lists with friends - friends should have 4 letter names", () => {
    test("'' should return ''", () => {
        expect(friend([])).toStrictEqual([])
    })

    test("A should return ''", () => {
        expect(friend(["A"])).toStrictEqual([])
    })

    test("A should return ''", () => {
        expect(friend(["Plum"])).toStrictEqual(["Plum"])
    })

    test("A should return ''", () => {
        expect(friend(["Plum", "Jeff"])).toStrictEqual(["Plum", "Jeff"])
    })

    test("A should return ''", () => {
        expect(friend(["Plum", "Jeff", "Colin"])).toStrictEqual(["Plum", "Jeff"])
    })

})