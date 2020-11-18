// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    // my first glance solution 
    let strArr = str.split('');
    let objectIndex = {}
    strArr.forEach((element) => {
        if (objectIndex[element]) {
            objectIndex[element] += 1
        } else {
            objectIndex[element] = 1
        }
    })
    // this is key here as Object.keys() will pull out all of an object's keys into an array
    // make a temporary "highest" count number variable and then compare the rest to see if the count value is higher or not 
    // and if the count value is higher, replace the tempMaxKey with the new key(which represents a character)
    let tempMaxKey = strArr[0]
    Object.keys(objectIndex).forEach((currentKey) => {
        if (objectIndex[currentKey] > objectIndex[tempMaxKey]) {
            tempMaxKey = currentKey
        }
    }) 
    return tempMaxKey
}

module.exports = maxChar;
