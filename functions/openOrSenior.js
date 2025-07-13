function openOrSenior(data) {
    let results = [];

    for (const [age, handicap] of data) {
        if (age >= 55 && handicap > 7) {
            results.push("Senior");
        } else {
            results.push("Open");
        }
    }
    return results;
}

export default openOrSenior

