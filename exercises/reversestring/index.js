// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const arrayOfStr = str.split('') 
    // console.log(arrayOfStr)
    let stringifiedArray = ""; 
    arrayOfStr.reverse().forEach( (letter) => {
        stringifiedArray += letter;
    })
    return stringifiedArray
}

module.exports = reverse;
