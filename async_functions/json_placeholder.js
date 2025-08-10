const url = `https://jsonplaceholder.typicode.com/todos/`


const fetchToDo = async (number) => {

    const response = await fetch(`${url}${number}`)
    const data = await response.json()
    console.log(data);
    return data

}

console.log(fetchToDo(7));

export default fetchToDo