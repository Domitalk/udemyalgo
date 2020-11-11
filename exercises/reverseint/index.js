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

    // shortened solution 
    // 
    // Math.sign() will return positive 1 or negative 1 
    // so just mutliplying the final number with it will return the correct pos/neg 
    // parseInt will ignore anythign that's not a number so the - at the end or the 0 before will be filtered out 
    //
    // const reversed = n
    //     .toString()
    //     .split('')
    //     .reverse()
    //     .join('');
    // return parseInt(reversed) * Math.sign(n)

    // even shorter 
    //
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)

    // first look answer 
    //
    // let reversedString = '';
    // if (n > 0) {
    //     n.toString().split('').forEach((element) => {
    //         reversedString = element + reversedString
    //     })
    //     return parseInt(reversedString)
    // } else if (n < 0) {
    //     (n * -1).toString().split('').forEach((element) => {
    //         reversedString = element + reversedString
    //     })
    //     return (-1 * parseInt(reversedString))
    // } else {
    //     return 0;
    // }
}

module.exports = reverseInt;
