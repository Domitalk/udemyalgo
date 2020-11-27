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
