/*
Write a JavaScript program to pass a 'JavaScript function' as parameter.
*/

"use strict";
(function () {
    function executeThis(inputFunction) {
        inputFunction();
    }
    return executeThis;
})()(function () {
        console.log("Hello!!!");
    });