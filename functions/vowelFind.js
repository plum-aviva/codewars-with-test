function dative(word) {
    let frontVowel = ["e", "é", "i", "í", "ö", "ő", "ü", "ű"] // the suffix is -nek
    let backVowel = ["a", "á", "o", "ó", "u", "ú"] //the suffix is -nak

    for (let i = word.length - 1; i >= 0; i--) {
        let letter = word[i]
        if (frontVowel.includes(letter)) {
            return word + "nek"
        } else if (backVowel.includes(letter)) {
            return word + "nak"
        }
    }

    return word
}

console.log(dative("ablak"))