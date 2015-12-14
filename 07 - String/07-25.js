/*
Write a JavaScript function to alphabetize a given string. 
Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
Test Data :
console.log(alphabetize_string('United States'));
Output :
"SUadeeinsttt"
*/
"use strict";
(function () {
    function alphabetize(pickedString) {
        return pickedString.split(" ").map(function (i) {
            return i.split("");
        }).reduce(function (i, j) {
            return i.concat(j);
        }).sort().join("");
    }
    console.log(alphabetize("United States"));
})();
