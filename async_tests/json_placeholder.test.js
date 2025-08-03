import fetchToDo from "../async_functions/json_placeholder";

describe("async function fetching data from json placeholder", () => {
    test("testing the fetch todo function", async () => {

        const toDo = await fetchToDo()

        expect(toDo).toEqual({
            userId: 1,
            id: 2,
            title: 'quis ut nam facilis et officia qui',
            completed: false
        })
    }

    )
})