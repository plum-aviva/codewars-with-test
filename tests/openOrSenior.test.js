import openOrSenior from "../functions/openOrSenior";



describe("sorts players - senior if over 55 and handicap greater than 7, or open membership", () => {
    test("[60, 8] will return senior", () => {
        expect(openOrSenior([[60, 20]])).toEqual(["Senior"])
    })

    test("[20, 5] will return Open", () => {
        expect(openOrSenior([[20, 5]])).toEqual(["Open"])
    })

    test("[[20, 5], [60, 8]] will return [open, senior]", () => {
        expect(openOrSenior([[20, 5], [60, 8]])).toEqual(["Open", "Senior"])
    })

    test("([[45, 12],[55,21],[19, -2],[104, 20]]) to return open, senior, open, senior", () => {
        expect(openOrSenior(([[45, 12], [55, 21], [19, -2], [104, 20]]))).toEqual(["Open", "Senior", "Open", "Senior"])


    })

})


// assert.deepEqual(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
// assert.deepEqual(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]),['Open', 'Open', 'Open', 'Open'])
// assert.deepEqual(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open'])