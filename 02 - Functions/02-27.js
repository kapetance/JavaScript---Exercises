/*
Write a JavaScript function that returns the longest palindrome in a given string.
Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
*/
"use strict";
(function () {
    function palindromeTest(substrings) {
        var palindromes = [];

        for (var y = 0; y < substrings.length; y++) {
            var isPalindrom = true;
            var substring = substrings[y];
            for (var x = 0; x < Math.floor(substring.length / 2); x++) {
                if (substring.charAt(x) !== substring.charAt(substring.length - 1 - x)) {
                    isPalindrom = false;
                }
            }
            if (isPalindrom) {
                palindromes.push(substring);
            }
        }
        return palindromes;
    }

    function createArrayOfSubstrings(pickedString) {
        var temp = [];
        for (var x = 0; x < pickedString.length - 1; x++) {
            for (var y = x + 1; y <= pickedString.length; y++) {
                var z = pickedString.slice(x, y);
                if (z.length > 2) {
                    temp.push(z);
                }
            }
        }
        return temp;
    }

    function findLongestPalindrome(pickedString) {
        var arrayOfSubstrings = palindromeTest(createArrayOfSubstrings(pickedString));
        arrayOfSubstrings.sort(function (a, b) {
            return (a.length < b.length);
        });
        console.log("Longest substring palindrome: " + arrayOfSubstrings[0]);
    }

    findLongestPalindrome("abracadabra");
})();
