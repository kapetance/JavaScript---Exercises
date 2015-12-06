/*
Write a JavaScript function to parameterize a string. 
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"
*/
"use string";
(function () {
    function stringParam(pickedString) {
        return pickedString.toLowerCase().split(" ").join("-");
    }
    console.log(stringParam("Robin Singh from USA."));
})();
