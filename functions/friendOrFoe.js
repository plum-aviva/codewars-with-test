function friend(friends) {
    let results = [];

    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            results.push(friends[i]);
        }
    }
    return results;
}

export default friend