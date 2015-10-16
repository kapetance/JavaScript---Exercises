/*
Write a JavaScript function to split a string and convert it into an array of words. 
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]
Click me to see the solution
*/
"use string";
(function () {
    function stringArray(picked) {
        return picked.split(" ");
    }
    console.log(stringArray("Robin Singh"));
})();
