import initializeNames from "../functions/middleName";

describe("takes turns the full middle name into initials and leaves first and last name as whole words", () => {
    test("Mary Jones will output Mary Jones", () => {
        expect(initializeNames("Mary Jones")).toBe("Mary Jones");
    })

    test("Mary Plum Jones will output Mary P. Jones", () => {
        expect(initializeNames("Mary Plum Jones")).toBe("Mary P. Jones");
    })

    test("Mary will output Mary", () => {
        expect(initializeNames("Mary")).toBe("Mary");
    })

})