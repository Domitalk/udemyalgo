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
    //
    // const reversed = str
    //     .split('')
    //     .reverse()
    //     .join('');
    // return str === reversed; 

    // novel solution using every 
    // 
    // every does boolean check on every item on array 
    // 
    const arr = str.split('') ;
    // every's return statement is boolean on wether EVERY iteration is true 
    // you still have to return it for the function to work 
    // every takes a function, the function can take 3 args(element, index, array)
    return arr.every((element, index) => {
        // first figure out the negativeIndex which is basically if index is 0 then the negativeIndex should be the last item 
        // because index starts at 0 we can't directly use length 
        // minus one from length and then also minus the index to get negativeIndex 
        const negativeIndex = arr.length - index -1;
        // and because every is like reduce, you have to return something every iteration 
        // it should be boolean, and if each iteration returns true, then the whole every statement returns true 
        return element === arr[negativeIndex]
    })
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



palindrome('abcde ');

module.exports = palindrome;
