function sameXO(str) {

    let xCount = 0
    let oCount = 0

    // does string have x if so how many 
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "x") {
            xCount += 1
        } else if (str[i].toLowerCase() === "o") {
            oCount += 1
        } else if (str.length < 1) {
            return true
        }

    }

    return xCount === oCount

}

export default sameXO