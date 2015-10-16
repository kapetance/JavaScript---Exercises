/*
 Write a JavaScript function to convert a string in abbreviated form. 
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
*/
"use strict";
(function () {
    function abbrevName(pickedName) {
        pickedName = pickedName.split(" ");
        pickedName[1] = pickedName[1].charAt(0) + ".";
        return pickedName.join(" ");
    }

    console.log(abbrevName("Robin Singh"));
})();
