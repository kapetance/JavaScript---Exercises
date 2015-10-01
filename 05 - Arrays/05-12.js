/*
Write a JavaScript program to compute the sum and product of an array of integers. 
*/

"use strict";
(function () {
    var x = [3, 4, 1, 6, 74, 98, -5, 6];
    (function sumElements() {
        console.log(x.reduce(function (a, b) {
            return a + b;
        }));
    })();
    (function productElements() {
        console.log(x.reduce(function (a, b) {
            return a * b;
        }));
    })();
})();
