// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    // so the idea is to isolate each word first 
    const stringAsArray = str.split(' ')
    // console.log(stringAsArray)
    // then going through a reducer make a string again but each time it iterates, it'll capitalize the first character and add the rest of the word and a space after 
    return stringAsArray.reduce((accumulator, element) => {
        // console.log(accumulator)
        // console.log(element)
        return accumulator += (element.charAt(0).toUpperCase() + element.slice(1) + ' ')
        // at the end of the reducer, it'll take out the last space 
        // another way to do this would be to check the index of the array, which the reducer can make available 
    }, '').slice(0, -1)
}

module.exports = capitalize;
