// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {




    // first look answer 
    let reversedString = '';

    if (n > 0) {
        n.toString().split('').forEach((element) => {
            reversedString = element + reversedString
        })
        return parseInt(reversedString)
    } else if (n < 0) {
        (n * -1).toString().split('').forEach((element) => {
            reversedString = element + reversedString
        })
        return (-1 * parseInt(reversedString))
    } else {
        return 0;
    }
}

module.exports = reverseInt;
