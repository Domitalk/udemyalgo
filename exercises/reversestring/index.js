// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reverse().join('');
    // const arrayOfStr = str.split('');
    // let stringifiedArray = ""; 
    // arrayOfStr.reverse().forEach( (letter) => {
    //     stringifiedArray += letter;
    // })
    // return stringifiedArray
}

module.exports = reverse;
