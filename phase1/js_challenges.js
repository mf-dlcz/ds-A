/**
 * Friday March 10th, 2023.
 */

function reverseString(str) {
    return str.split('').reverse().join('');
}


// 'bob' --> 'bob'
// 'Maria' --> 'airam'
// 'deed' ---> 'deed'

const isPalindrome = (str) => {
    if (str.toLowerCase() === str.split('').reverse().join('').toLowerCase()) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}

// isPalindrome('Bob');

// apples ---> 'even'
// maria ---> 'odd'
const oddOrEven = (str) => {
    if (str.length % 2 === 0) {
        console.log(`${str} is even`)
        return 'even'
    } else {
        console.log(`${str} is odd`)
        return 'odd'
    }

}

oddOrEven('Maria')

/**
 * Homework #1
 */
// Given an integer n, return a string array answer(1 - indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i(as a string) if none of the above conditions are true.


//     Example 1:

// Input: n = 3
// Output: ["1", "2", "Fizz"]

// Example 2:

// Input: n = 5
// Output: ["1", "2", "Fizz", "4", "Buzz"]

// Example 3:

// Input: n = 15
// Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]

let fizzBuzz = function (n) {
    for (let i = 1; i <= n; i++) {
        let divisibleBy3 = i % 3 == 0;
        let divisibleBy5 = i % 5 == 0;

        if (divisibleBy3 && divisibleBy5) {
            return 'FizzBuzz';
        } else if (divisibleBy3) {
            return 'Fizz';
        } else if (divisibleBy5) {
            return 'Buzz';
        } else {
            return `${i}`
        }
    }
}

fizzBuzz(3);