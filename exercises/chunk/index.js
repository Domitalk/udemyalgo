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
    let motherArray = [];
    let holdingArray = [];
    let placeholderNumber = 1;
    for (let i = 0; i < array.length; i++) {
        if (placeholderNumber < size) {
            // when we're just adding to holding array
            holdingArray.push(array[i])
            placeholderNumber += 1
        } else {
            // when we're pushing the holding array 
            holdingArray.push(array[i])
            motherArray.push(holdingArray)

            holdingArray = []
            placeholderNumber = 1
        } 
    }
    if (holdingArray.length > 0) {
        motherArray.push(holdingArray)
    }
    return motherArray;
}

module.exports = chunk;
