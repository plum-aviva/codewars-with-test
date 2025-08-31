function piecesValue(arr, s) {
    let firstLetterColour = s[0];
    const hash = Object.freeze({
        queen: 9, rook: 5, bishop: 3, knight: 3, pawn: 1, king: 0
    });

    let result = 0

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i]
        for (let j = 0; j < row.length; j++) {
            let chessPiece = row[j]
            if (chessPiece === ' ') {
                continue

            }
            let piece = chessPiece.split("-")
            if (piece[0] === firstLetterColour) {
                let value = hash[piece[1]]
                result += value
            }
        }
    }
    return result
}

var r3 = [[' ', ' ', ' ', ' ', 'b-king', ' ', ' ', ' '],
[' ', 'b-bishop', ' ', ' ', 'b-pawn', 'b-pawn', ' ', ' '],
[' ', ' ', ' ', ' ', 'b-knight', ' ', ' ', ' '],
[' ', ' ', 'w-queen', ' ', ' ', ' ', ' ', ' '],
[' ', 'w-bishop', ' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' ', 'b-rook'],
[' ', 'w-pawn', 'w-pawn', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', 'w-king', ' ', ' ', ' ', ' ', ' ']]

console.log(piecesValue(r3, "white"))