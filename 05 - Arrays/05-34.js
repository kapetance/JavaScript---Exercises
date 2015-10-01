/*Write a JavaScript function to get nth largest element from an unsorted array.

Test Data :
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
89*/

"use strict";
(function () {
    function nthlargest(pickedArray, pickedNumber) {
        return (pickedNumber < pickedArray.length) ? pickedArray.sort(function (a, b) {
            return a > b;
        })[pickedNumber] : "There was an error. Try again!"
    }
    console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4));
})();