// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

    // pre-adding array solution 
    let motherArray = [];
    let chunkedArrayIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            // if first time 
            motherArray[0] = [array[i]]
        } else if (motherArray[chunkedArrayIndex].length < size) {
            // if there is room to add element into chunk
            motherArray[chunkedArrayIndex].push(array[i])
        } else {
            // if the chunk is full so new one is req 
            chunkedArrayIndex++
            motherArray[chunkedArrayIndex] = [array[i]]
        }
    }
    return motherArray


    // first glance solution 
    // let motherArray = [];
    // let holdingArray = [];
    // let placeholderNumber = 1;
    // for (let i = 0; i < array.length; i++) {
    //     if (placeholderNumber < size) {
    //         // when we're just adding to holding array
    //         holdingArray.push(array[i])
    //         placeholderNumber += 1
    //     } else {
    //         // when we're pushing the holding array 
    //         holdingArray.push(array[i])
    //         motherArray.push(holdingArray)

    //         holdingArray = []
    //         placeholderNumber = 1
    //     } 
    // }
    // if (holdingArray.length > 0) {
    //     motherArray.push(holdingArray)
    // }
    // return motherArray;
}

module.exports = chunk;
