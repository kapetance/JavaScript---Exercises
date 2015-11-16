/* Write a JavaScript function to get all prime numbers from 0 to a specified number. 
Test Data :
console.log(primeFactorsTo(5));
[2, 3, 5]
console.log(primeFactorsTo(15));
[2, 3, 5, 7, 11, 13] */

"use strict";
(function () {
    function primeFactorsTo(pickedNUmber) {
        var finalArray = [];
        for (var x = 2; x <= pickedNUmber; x++) {
            var isPrime = true;
            for (var y = 2; y < x; y++) {
                if (x % y === 0 && x !== y) {
                    isPrime = false;
                    console.log(y);
                    break;
                }
            }
            if (isPrime) {
                finalArray.push(x);
            }
        }
        return finalArray;
    }
    console.log(primeFactorsTo(5));
    console.log(primeFactorsTo(15));
})();
