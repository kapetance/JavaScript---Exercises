/*
Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/
"use strict";
(function (x) {
    function isItPalindrome(word) {
        word = word.toLowerCase().split(" ").join("");
        for (var i = 0; i < Math.floor(word.length / 2); i++) {
            if (word.charAt(i) !== word.charAt(word.length - i - 1)) {
                return "Word is not Palindrome!";
            }
        }
        return "Word is Palindrome";
    }
    console.log(isItPalindrome(x));
})("Maja sa Nedom ode na sajam");
