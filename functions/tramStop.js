function tram(stops, descending, onboarding) {
    //your code here
    let highestCapacity = 0;
    let peopleOnTrain = 0;

    for (let i = 0; i < stops; i++) {
        peopleOnTrain = peopleOnTrain - descending[i] + onboarding[i]
        if (peopleOnTrain > highestCapacity) {
            highestCapacity = peopleOnTrain;
        }


    }
    return highestCapacity
}

console.log(tram(4, [0, 1, 2, 3], [5, 4, 3, 0]))
console.log(tram(4, [0, 2, 4, 4], [3, 5, 2, 0]));
console.log(tram(10, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))
