/*
Write a JavaScript function to find a word within a string. 
Test Data :
console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
Output :
"'fox' was found 1 times."
"'aa' was found 2 times."
*/

"use strict";
(function () {
    function searchWord(pickedWord, searchString) {
        return "'" + searchString + "' was found " + pickedWord.split(" ").filter(function (x) {
            return x.slice(0, searchString.length) === searchString;
        }).length + " times";
    }
    console.log(searchWord("The quick brown fox", "fox"));
    console.log(searchWord("aa, bb, cc, dd, aa", "aa"));
})();
