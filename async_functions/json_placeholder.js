const url = "https://jsonplaceholder.typicode.com/todos/2"


const fetchToDo = async () => {

    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    return data

}

fetchToDo()