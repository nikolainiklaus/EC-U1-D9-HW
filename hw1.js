/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/

console.log("-------------------------1--------------------------------");
function area(l1, l2) {
    return l1 * l2;
}

console.log(area(10, 10));

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

console.log("-------------------------2--------------------------------");

function crazySum(int1, int2) {
    if (int1 === int2) {
        return (int1 + int2)*3;
    } else {
        return int1 + int2;
    }
}

console.log(crazySum(12, 10));



/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

console.log("-------------------------3--------------------------------");


function crazyDiff(int3, int4 = 19) {
    if (int3 > 19) {
        return (Math.abs(int3-19))*3; 
    } else {
        return Math.abs(int3-19);
    }
}

console.log(crazyDiff(20));

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/
console.log("-------------------------4--------------------------------");

function boundary(n, int5 = 20, int6 = 100, int7 = 400) {
    if ((n >= int5 && n <= int6) || n === int7) {
        return true;
    } else {
        return false;
    }
}

console.log(boundary(400));

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
console.log("-------------------------5--------------------------------");


function strivify(str) {
    if (str.includes("Strive")) {
        return `${str}`
    } else {
        return  `Strive ${str}`
    }
}

console.log(strivify("Hello"));

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

console.log("-------------------------6--------------------------------");


function check3and7(posInt) {
    if (posInt >= 0 && (posInt % 3 === 0 || posInt % 7 === 0 )) {
        return true
    } else if (posInt < 0) {
        return ("Please enter a positive number")
    } else {
        return ("no multiplier of 3 or 7")
    }
}

console.log(check3and7(11));

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

console.log("-------------------------7--------------------------------");

function reverseString(randomStr) {
    let newString = "";
    for (let i = randomStr.length - 1; i >= 0; i--) {
        newString += randomStr[i];
    }
    return newString;
}

console.log(reverseString("hello"));

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

console.log("-------------------------8--------------------------------");

function upperFirst(lowString) {
    let upperCase = `${lowString[0].toUpperCase()}`;
    return `${upperCase}${lowString.slice(1)}`;
}

console.log(upperFirst("Let try"));


/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

console.log("-------------------------9--------------------------------");

let newString = ""
function cutString(randomString2) {
    let stringLenght = randomString2.length - 1;
    return removeFirstChar = randomString2.slice(1, stringLenght)
}

newString = cutString("Hello There")

console.log(newString);



/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

console.log("-------------------------10--------------------------------");

function giveMeRandom(n) {
    let array = [];
    for (let index = 0; index < n; index++) {
        temp = Math.floor(Math.random() * 11);
        array.push(temp);
    } 
    return array
}

console.log(giveMeRandom(9));
/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
