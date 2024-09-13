//String Manipulation Functions:
//1-Reverse a String:
function reverseString(str) {
    return str.split("").reverse().join("");
}
//2-count Characters:
function countCharacters(Array) {

    return Array.length;
  }
 

//3-Capitalize Words:
function capitalize(sentence) {
    let words = sentence.split(" ");

    for (let i =0; i< words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);

    }

    return words.join(' ');
}
/*--------------------------------------------------------------------------*/
//Array Functions:
//1-Find Maximum and Minimum:
function findMax(arr) {

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findMin(arr) {

    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

//2-Sum of Array:
function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

//3-Filter Array:
function filterArray(arr, condition) {
    return arr.filter(condition);
  }
/*--------------------------------------------------------------------------*/

//Mathematical Functions:
//1-Factorial
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

//2-Prime Number Check
function isPrime(number) {
    // Check if the number is less than 2
    if (number < 2) {
        return false;
    }
    // Check for divisibility by numbers from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // If the number is divisible by any number other than 1 and itself, it's not prime
        }
    }
    return true; // If the number is not divisible by any other number, it's prime
}

//3-Fibonacci Sequence:

function fibonacciSequence(numTerms) {
    let sequence = [];

    // First two terms of the Fibonacci sequence
    let a = 0;
    let b = 1;

    // Push the first two terms into the sequence
    sequence.push(a);
    sequence.push(b);

    // Generate subsequent terms
    for (let i = 2; i < numTerms; i++) {
        let nextTerm = a + b;
        sequence.push(nextTerm);
        a = b;
        b = nextTerm;
    }

    return sequence;
}
