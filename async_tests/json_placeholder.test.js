import fetchToDo from "../async_functions/json_placeholder";

describe("async function fetching data from json placeholder", () => {
    test("testing the fetch todo function", async () => {

        const toDo = await fetchToDo(2)

        expect(toDo).toEqual({
            userId: 1,
            id: 2,
            title: 'quis ut nam facilis et officia qui',
            completed: false
        })

    })

    test("testing the fetch todo function", async () => {

        const toDo = await fetchToDo(7)

        expect(toDo).toEqual({

            userId: 1,
            id: 7,
            title: 'illo expedita consequatur quia in',
            completed: false

        })
    }

    )
})

