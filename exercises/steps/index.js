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

    // 1. iterate through n times (each row)
    let currentStep = 1
    while (currentStep <= n) {
        // 2. modify tempString 
        let tempString = ""
        for (i = 1; i <= n; i++) {
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
