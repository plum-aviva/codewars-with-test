import reverseWords from "../functions/reverse_words";

describe("take an input string with multiple words and return the string with the words in the same order but each word reversed, spaces preserved", () => {
    test("hi will retertn ih", () => {
        expect(reverseWords("hi")).toBe("ih")
    })

    test("hello you will return olleh uoy", () => {
        expect(reverseWords("hello you")).toBe("olleh uoy")
    })

    test("hello there  you will return olleh ereht  uoy", () => {
        expect(reverseWords("hello there  you")).toBe("olleh ereht  uoy")
    })

    test("   it hardocoded have avoid  should    to Why   rule! would Kata it is not This is case is is! not always rule!    Why Kata a it should return '   ti dedocodrah evah diova  dluohs    ot yhW   !elur dluow ataK ti si ton sihT si esac si !si ton syawla !elur    yhW ataK a ti'", () => {
        expect(reverseWords("   it hardocoded have avoid  should    to Why   rule! would Kata it is not This is case is is! not always rule!    Why Kata a it")).toBe('   ti dedocodrah evah diova  dluohs    ot yhW   !elur dluow ataK ti si ton sihT si esac si !si ton syawla !elur    yhW ataK a ti')
    })

})

// Input: "   it hardocoded have avoid  should    to Why   rule! would Kata it is not This is case is is! not always rule!    Why Kata a it": expected '   ti dedocodrah evah diova  dluohs    ot yhW   elur dluow ataK ti si ton sihT si esac si si ton syawla elur    yhW ataK a ti' to equal 
// '   ti dedocodrah evah diova  dluohs    ot yhW   !elur dluow ataK ti si ton sihT si esac si !si ton syawla !elur    yhW ataK a ti'