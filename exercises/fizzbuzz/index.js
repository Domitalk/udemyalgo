// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {

    // first glance solution
    // using the old school basic iterator and we go on until i < n + 1; 
    // always start with the most constrictivec so that we can weed out first 
    // get to solution by using modulo to check remainder 
    for (let i = 1; i <= n ; i++) {
        // you can modulo 15 instead just by using basic maths 
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz")
        } else if (i % 3 === 0) {
            console.log("fizz")
        } else if (i % 5 === 0) {
            console.log("buzz")
        } else {
            console.log(i)
        }
    }
}

module.exports = fizzBuzz;
