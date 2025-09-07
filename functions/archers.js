function archersReady(archers) {

    if (archers.length === 0) {
        return false
    }


    for (let i = 0; i < archers.length; i++) {
        if (archers[i] < 5) {
            return false
        }
    }
    return true;



}

console.log(archersReady([1, 2, 3]))

console.log(archersReady([5, 6, 7]))

// loop through archers - and if numbers found less than 5 return false 
// if no numbers found below 5 return true 
// empty array return false 