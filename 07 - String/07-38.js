/*
Write a JavaScript function to create a case-insensitive search. 
Test Data :
console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
"Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
"Not Matched"
*/
"use strict";
(function () {
    function caseInsensitiveSearch(pickedString, searchPhrase) {
        return new RegExp(searchPhrase, "i").test(pickedString) ? "Matched" : "Not Mached";
    }

    console.log(caseInsensitiveSearch('JavaScript Exercises', 'exercises'));
    console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercises'));
    console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercisess'));

})();
