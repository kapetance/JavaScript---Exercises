/*
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/

"use strict";
(function () {
    function longestWord(pickedSentence) {
        var words = pickedSentence.split(" ");
        var longest = words[0];
        for (var i = 1; i < words.length; i++) {
            if (words[i].length > longest.length) {
                longest = words[i];
            }
        }
        console.log(longest);
    }
    return longestWord;
})()("Our patience will achieve more than our force.");