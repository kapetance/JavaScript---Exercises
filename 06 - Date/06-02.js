/*
Write a JavaScript function to get the current date. 

Note : Pass a separator as an argument.
Test Data :
console.log(curday('/')); 
console.log(curday('-'));
Output :
"11/13/2014" 
"11-13-2014"
*/

"use strict";
(function () {
    function curday(separator) {
        var currentTime = new Date();
        return (currentTime.getDate() + separator + (currentTime.getMonth() + 1) + separator + currentTime.getFullYear());
    }

    console.log(curday('/'));
    console.log(curday('-'));

})();
