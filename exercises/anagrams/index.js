// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {
    const stringACharacterMap = makeStringIntoIndex(stringA)
    const stringBCharacterMap = makeStringIntoIndex(stringB)

    // first exit case, wherein the keys dont match up so there's no way for it to be correct 
    // this also makes it so we only have to iterate through one character map and not both 
    if (Object.keys(stringACharacterMap).length !== Object.keys(stringBCharacterMap).length) {
        return false;
    }

    // then, iterate through each, and figure out if all the values match 
    // object iteration is in 
    // array iteration is of 
    // just by looking at this, it's clear that the let char is the key of the object and obviously that's the best thing to iterate with so that the values can be pinpointed
    for (let char in stringACharacterMap) {
        if (stringACharacterMap[char] !== stringBCharacterMap[char]) {
            return false;
        }
    }

    return true;
}

const makeStringIntoIndex = (string) => {
    const characterMap = {};
    // instead of using old school for loop, use the for (of) and don't bother assignming the array to a variable just put it inside 
    for (let char of string.replace(/[^\w]/g, "").toLowerCase().split('')) {
        // then this assigns + 1 but if it doesn't exist, it'll make it 1 if the value is invalid 
        characterMap[char] = characterMap[char] + 1 || 1
    }
    return characterMap
}

function firstGlance(stringA, stringB) {

    // first glance answer 
    // just because it's going to happen twice, just make a helper to convert string into a index object
    const makeStringIntoIndex = (string) => {
        let tempObject = {};
        const stringArray = string.replace(/[^\w]/g, "").toLowerCase().split('')
        for (i = 0; i < stringArray.length; i++) {
            if (tempObject[stringArray[i]]) {
                tempObject[stringArray[i]] += 1
            } else {
                tempObject[stringArray[i]] = 1
            };
        };
        return tempObject;
    }; 

    // make the two index objects
    const indexA = makeStringIntoIndex(stringA)
    const indexB = makeStringIntoIndex(stringB)

    // a breakout clause to see if the length of keys is the same 
    if (Object.keys(indexA).length !== Object.keys(indexB).length) {
        return false; 
    }

    // only one needs to be false so here just make sure that it stays true 
    let holdingAnswer = true 

    // check each index and if any one of them have different values, make holding answer = false 
    Object.keys(indexA).forEach((element) => {
        if (indexA[element] !== indexB[element]) {
            holdingAnswer = false;
        };
    });

    // just return the holding answer 
    return holdingAnswer;
}

module.exports = anagrams;
