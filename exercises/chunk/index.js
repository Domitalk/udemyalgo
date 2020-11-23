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
    // solution using slice instead 
    let chunked = []
    let index = 0 
    while (index < array.length) {
        chunked.push(array.slice(index, index + size))
        index += size
    }
    return chunked 


    // // the solution from course 
    // const chunked = []
    // for (let element of array) {
    //     // each time the iteration happens, going to pull out the last chunk array 
    //     const last = chunked[chunked.length - 1]
    //     // and here going to check if it even exists? use bang to return true if it's undefined 
    //     // and also going to check if the length of the the last chunk is at full capacity 
    //     // either of these conditions means that we're going to add a new chunk
    //     if (!last || last.length === size) {
    //         chunked.push([element])
    //     } else {
    //         // otherwise just push the element into the last chunk 
    //         last.push(element)
    //     }
    // }
    // return chunked; 

    // // pre-adding array solution 
    // let motherArray = [];
    // let chunkedArrayIndex = 0;
    // for (let i = 0; i < array.length; i++) {
    //     if (i === 0) {
    //         // if first time 
    //         motherArray[0] = [array[i]]
    //     } else if (motherArray[chunkedArrayIndex].length < size) {
    //         // if there is room to add element into chunk
    //         motherArray[chunkedArrayIndex].push(array[i])
    //     } else {
    //         // if the chunk is full so new one is req 
    //         chunkedArrayIndex++
    //         motherArray[chunkedArrayIndex] = [array[i]]
    //     }
    // }
    // return motherArray


    // // first glance solution 
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
