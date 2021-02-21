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
function steps(n, row = 0, returnString = '') {
    // this recursive solution is a bit better than the previous double for loop because it cuts out one layer of time complexity 

    // base case to stop 
    if (n === row) {
        return;
    }

    // incremented recursion
    if (n === returnString.length) {
        // basically creating the double for loop in previous case with row being the placeholder variable that creates the first loop 
        console.log(returnString);
        // in the next row we should start over with returnString
        return steps(n, row += 1);
    } 

    // adding a char and doing again 
    // this is essentially the second for loop 
    const add = returnString.length <= row ? "#" : " "
    steps(n, row, returnString + add)
}


// in recursive, start with a function that's going to loop 
function printNumber(n, dec = 1) {
    // 3rd have a resonable default aka dec = 1

    // 1st thing is to find the base case, where do we stop? 
    if (n === 0) {
        return;
    }

    // the WORK GOES HERE 

    // to check where we at 
    console.log(n);

    // 2nd - to recurse with a diff number the arg HAS to change every time 
    printNumber(n - dec, 1);
}

function iterativeSolution(n) {
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
