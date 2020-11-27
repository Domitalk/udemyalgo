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




    // first glance answer 

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

    const indexA = makeStringIntoIndex(stringA)
    const indexB = makeStringIntoIndex(stringB)

    if (Object.keys(indexA).length !== Object.keys(indexB).length) {
        return false; 
    }

    let holdingAnswer = true 

    Object.keys(indexA).forEach((element) => {
        if (indexA[element] !== indexB[element]) {
            holdingAnswer = false;
        };
    });

    return holdingAnswer;
}

module.exports = anagrams;
