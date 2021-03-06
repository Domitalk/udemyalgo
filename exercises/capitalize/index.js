// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// MY NOTES
// what are possible edge cases beyond what the tests look for? 
// 1. special characters? 
// 2. double space? (prob not an issue with split)
// 
// MAKE 
// 1. Maybe a validation helper to make sure that there's no error when special characters or numbers are thrown in 

function lessonSolutionTwo(str) {
    // 1. create empty string holder 
    // this guy starts off with str[0] because it'll need to be capitalized but there will be no space before it 
    let stringHolder = str[0].toUpperCase();
    // 2. iterate each character, 
    for (i = 1; i < str.length; i++) {
        // 2a. if previous index is space, capitalize and add to string holder
        if (str[i - 1] === ' ') {
            stringHolder += str[i].toUpperCase()
        } else {
        // 2b. else just add to string holder 
            stringHolder += str[i]
        };
    };
    return stringHolder;
}

function lessonSolutionOne(str) {
    // solution 1 from lesson 

    // they go about it the simpler way and just keep things as an array and push into 
    const words = []; 

    for (let word of str.split(' ')) {
        // i kind of like this better than charAt but i'm not sure what kind of flags it could possibly throw if charAt doesn't work or zero index isn't character, i assume they will throw errors in the same situation because toUpperCase will trigger no matter what
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ')
}

function capitalize(str) {
    // so the idea is to isolate each word first 
    const stringAsArray = str.split(' ')

    // ** stretch goal validate: validating helper to check for special characters 
    const isAlphabet = (letter) => {
        // using ES6 to check for alpha doesn't work to filter out special characters 
        // return letter.toLowerCase() != letter.toUpperCase();
        return letter.match(/[a-z]/)
    }; 

    // ** stretch goal validate: helper to iterate through a word and find the first alphabet to capitalize 
    const specialCharacterEdgeCase = (string) => {
        let holderString = '';
        let keepGoing = true; 
        for (i = 0; i < string.length; i++) {
            if (!keepGoing) {
                // just stop 
                break; 
            } else if (isAlphabet(string[i]) && keepGoing) {
                // console.log("keep going")
                // if it's a string, uppercase and add the rest of the string and flag stop 
                holderString += string[i].toUpperCase() + string.slice(i + 1) 
                keepGoing = false;
            } else {
                // if it's not a string just add it and go to next one 
                // console.log("dollar sign trigger")
                holderString += string[i]
            }
        };
        return holderString;
    }

    // console.log(stringAsArray)
    // then going through a reducer make a string again but each time it iterates, it'll capitalize the first character and add the rest of the word and a space after 
    return stringAsArray.reduce((accumulator, element) => {
        // console.log(accumulator)
        // console.log(element)
        // remember that reducer needs a return value 
        // another way to do this would be just to use index of string [0] instead of using the slice charAt function which is a sort of slice 

        // ** stretch goal validate: check if alphabet and if not do a special 
        if (isAlphabet(element[0])) {
            return accumulator += (element.charAt(0).toUpperCase() + element.slice(1) + ' ')
        } else {
            return accumulator += (specialCharacterEdgeCase(element) + ' ')
        }
        // at the end of the reducer, it'll take out the last space 
        // another way to do this would be to check the index of the array, which the reducer can make available 
    }, '').slice(0, -1)
}



module.exports = capitalize;
