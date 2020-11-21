// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {


    const chars = {};
    let max = 0; 
    let maxChar = '';
    // for let of is for array or string 
    for (let char of str) {
        // this is a diff way to go about it instead of if statement 
        // the || will try to do whats before it, and if it fails, then it will do instead 
        chars[char] = chars[char] + 1 || 1; 
        // if (!chars[char]) {
        //     chars[char] = 1; 
        // } else {
        //     chars[char]++; 
        // }
    }
    // for objects it is for let in 
    for (let char in chars) {
        if (chars[char] > max) {
            max = chars[char]; 
            maxChar = char ;
        }
    }
    return maxChar;

    
    // my first glance solution 

    // let strArr = str.split('');
    // let objectIndex = {}
    // strArr.forEach((element) => {
    //     if (objectIndex[element]) {
    //         objectIndex[element] += 1
    //     } else {
    //         objectIndex[element] = 1
    //     }
    // })
    // this is key here as Object.keys() will pull out all of an object's keys into an array
    // make a temporary "highest" count number variable and then compare the rest to see if the count value is higher or not 
    // and if the count value is higher, replace the tempMaxKey with the new key(which represents a character)

    // let tempMaxKey = strArr[0]
    // Object.keys(objectIndex).forEach((currentKey) => {
    //     if (objectIndex[currentKey] > objectIndex[tempMaxKey]) {
    //         tempMaxKey = currentKey
    //     }
    // }) 
    // return tempMaxKey
}

module.exports = maxChar;
