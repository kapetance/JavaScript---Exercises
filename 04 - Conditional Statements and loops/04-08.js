/*
According to Wikipedia a happy number is defined by the following process :
"Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
Write a JavaScript program to find and print the first 5 happy numbers. 
*/
"use strict";
(function () {
    function sumSquares(pickedNumber) {
        var tempNum = pickedNumber;
        var tempSum = 0;
        while (tempNum >= 1) {
            tempSum = tempSum + (tempNum % 10) * (tempNum % 10);
            tempNum = Math.floor(tempNum / 10);
        }
        return tempSum;
    }
    /*Number.prototype.numberToArray = function () {
        //Create array from number
        var that = this;
        var tempArray = [];
        while (that >= 1) {
            tempArray.unshift(that % 10);
            that = Math.floor(that / 10);
        }
        return tempArray;
    };

    function sumSquares(pickedNumber) {
        //Suming squares of number elements
        return pickedNumber.numberToArray().map(function (a) {
            return a * a;
        }).reduce(function (a, b) {
            return a + b;
        });
    }*/

    function checkNumber(pickedNumber) {
        function test(tempNumber) { //Recursion
            if (tempNumber === 1) {
                return true;
            } else if (pastNumbers.indexOf(tempNumber) === -1) {
                pastNumbers.push(tempNumber);
                //Call test again and again
                return test(sumSquares(tempNumber));
            } else {
                return false;
            }
        }
        //Setting past number array to put used numbers, if number is tested again loop will finish.
        var pastNumbers = [];
        return test(pickedNumber);
    }

    function findHappies(numberOfHappies) {
        var counter = 0;
        var currentNum = 1;
        var happyArray = [];
        while (counter < numberOfHappies) {
            if (checkNumber(currentNum)) {
                counter++;
                happyArray.push(currentNum);
            }
            currentNum++;
        }
        console.log(happyArray);
    }

    return findHappies;
})()(10);
