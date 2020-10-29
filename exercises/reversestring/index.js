// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    // solution #1 
    // const arrayOfStr = str.split('');
    // let stringifiedArray = ""; 
    // arrayOfStr.reverse().forEach( (letter) => {
    //     stringifiedArray += letter;
    // })
    // return stringifiedArray

    // optimal #1 
    // return str.split('').reverse().join('');

    // altnernate without reverse() bc it's a new js built in func
    let reversedString = "";
    for (let char of str) {
        // we're going to go through all of the characters in the string 
        // and add the previous collection of it behind the new one 
        reversedString = char + reversedString;
    }
    return reversedString;

}

module.exports = reverse;
