// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {


    // blind solution split into array, 
    // iterate and then add items of array into a empty string 
    // and return the string at the end 
    //
    // const arrayOfStr = str.split('');
    // let stringifiedArray = ""; 
    // arrayOfStr.reverse().forEach( (letter) => {
    //     stringifiedArray += letter;
    // })
    // return stringifiedArray


    // optimal #1 
    // using split and reverse and then join all in one line 
    //
    // return str.split('').reverse().join('');


    // altnernate without reverse() bc it's a new js built in func
    // for (let char of str) {} is a new version of for (var i = 0; i < str.lenght; i++) {}
    // this sacrafices index for value but still a lot simpler and less prone to error 
    //
    // let reversedString = "";
    // for (let char of str) {
    //     // we're going to go through all of the characters in the string 
    //     // and add the previous collection of it behind the new one 
    //     reversedString = char + reversedString;
    // }
    // return reversedString;


    // most complicated solution 
    // reduce takes two args, a variable to add up to, 
    // and the variable that's going to represent each item on the array 
    // with modern syntax we don't have to return the value like you would normally in a reduce if it's in one line 
    // but you still want to return the whole line as a statement 
    //
    // in reality reduce takes two args, a function that returns and a starting value 
    // in this example we're working with strings and we don't want a starting value so an empty string is used at the end of reduce
    //
    return str.split('').reduce((r, c) => c + r, '');

}

module.exports = reverse;
