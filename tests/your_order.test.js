import order from "../functions/your_order";

describe("string with words that contain numbers - reorder the words so the numbers are in the right order", () => {
    test("Hello1 there2 will return Hello1 there2", () => {
        expect(order("Hello1 there2")).toBe("Hello1 there2")
    })

    test("empty string will return an empty string", () => {
        expect(order("")).toBe("")
    })

    test("coffee2 cup1 will become cup1 coffee2", () => {
        expect(order("coffee2 cup1")).toBe("cup1 coffee2")
    })

})