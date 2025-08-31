function initializeNames(name) {
    let nameArray = name.split(" ")
    let nameString = "";
    let lastWordIndex = nameArray.length - 1;
    console.log(nameArray)

    if (nameArray.length === 1) {
        return name;
    }

    nameString += nameArray[0] + " "



    for (let i = 1; i < nameArray.length - 1; i++) {

        nameString += nameArray[i][0].toUpperCase() + "." + " "

    }
    nameString += nameArray[lastWordIndex];

    return nameString
}


// Mary P. Jones



console.log(initializeNames("Mary Plum Henry Jones"));

export default initializeNames