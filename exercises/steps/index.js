// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


function steps(n) {
    // from 0 to n (iterate)
    for (let row = 0; row < n; row++) {
    //     create empty string 
        let returnString = ''
    //     from 0 to n (iterate through columns)
        for (let column = 0; column < n; column++) {
    //         if current column is <= current row 
            if (column <= row) {
    //             add # 
                returnString += '#'
    //         else 
            } else {
    //              add ' '
                returnString += ' '
            }
        }
    //     console.log
        console.log(returnString)
    }
}

function firstLook(n) {
    // 1. iterate through n times (each row)
    let currentStep = 1
    while (currentStep <= n) {
        // 2. modify tempString 
        let tempString = ""
        for (let i = 1; i <= n; i++) {
            if (i <= currentStep) {
                tempString += "#"
            } else {
                tempString += " "
            }
        }
        console.log(tempString)
        currentStep += 1 
    }
}

module.exports = steps;
