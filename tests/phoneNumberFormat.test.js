import createPhoneNumber from "../functions/phoneNumberFormat";

describe("turn an array of ten numbers into a formatted phone number, a string  " /
    "first 3 numbers then a space, then three numbers - a hypen and the last 4 digits ", () => {
        test("[1, 2, 3, 4, 5, 6, 7, 8, 9, 0] will return '(123) 456-7890'", () => {
            expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe('(123) 456-7890')
        })
    })