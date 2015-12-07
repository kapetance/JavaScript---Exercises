/*
Write a JavaScript function to capitalize the first letter of a string. 
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"
*/
"use strict";
(function () {
    function capitalize(pickedString) {
        return pickedString[0].toUpperCase() + pickedString.slice(1);
    }
    console.log(capitalize('js string exercises'));
})();
