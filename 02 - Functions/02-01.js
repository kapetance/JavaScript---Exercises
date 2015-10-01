/*
Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223
*/
"use strict";
(function (pickedNumber) {
    pickedNumber = pickedNumber.toString();
    var newNumber = "";
    var x = 0;
    while (x < pickedNumber.length) {
        newNumber = newNumber + pickedNumber.slice(pickedNumber.length - 1 - x, pickedNumber.length - x);
        x++;
    }
    console.log(newNumber);

})(32243);
