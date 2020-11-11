// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // this was my first glance answer 
    //
    // let arr = str.split('');
    // let stringifiedReversed = '';
    // arr.forEach((letter) => {
    //     stringifiedReversed = letter + stringifiedReversed 
    // });
    // if (str === stringifiedReversed) {
    //     return true 
    // } else {
    //     return false 
    // };

    // the simple solution 
    //
    // split the string, reverse the string, join the string 
    // and return whatever comes out from === which will basically come out true or false 
    const reversed = str.split('').reverse().join('');
    return str === reversed; 
}

    // most complicated solution 
    // reduce takes two args, a variable to add up to, 
    // and the variable that's going to represent each item on the array 
    // with modern syntax we don't have to return the value like you would normally in a reduce if it's in one line 
    // but you still want to return the whole line as a statement 
    //
    // in reality reduce takes two args, a function that returns and a starting value 
    // in this example we're working with strings and we don't want a starting value so an empty string is used at the end of reduce
    //
    // return str.split('').reduce((returningIncrementalVariable, iterativeItem) => iterativeItem + returningIncrementalVariable, '');



// palindrome('abcde ');

module.exports = palindrome;
