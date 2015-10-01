/*
Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.
*/

"use strict";
(function () {
    function insertDash(pickedNumber) {
        var finalArray = [];
        var inputArray = pickedNumber.split("");
        for (var x = 0; x < inputArray.length; x++) {
            finalArray.push(inputArray[x]);
            if (inputArray[x] % 2 === 0 && inputArray[x + 1] % 2 === 0) {
                finalArray.push("-");
            }
        }
        console.log(finalArray.join(""));

    }
    return insertDash;
})()("025468");