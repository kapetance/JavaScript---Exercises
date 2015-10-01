/*
Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*/
"use strict";
(function () {
    function primer(pickedNumber) {
        function checkNumber() {
            for (var i = 2; i < pickedNumber; i++) {
                if (pickedNumber % i === 0) {
                    return false;
                }
                return true;
            }
        }
        if (checkNumber()) {
            console.log("Number " + pickedNumber + " is prime.");
        } else {
            console.log("Number " + pickedNumber + " is not prime.");
        }
    }
    return primer;
})()(179426549);