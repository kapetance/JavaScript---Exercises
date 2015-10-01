/*
 Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5
*/
"use strict";
(function () {
    function countVowels(pickedSentence) {
        console.log(pickedSentence);
        var countedVowels = 0;
        var x = "";
        for (var i = 0; i < pickedSentence.length; i++) {
            x = pickedSentence.charAt(i);
            if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
                countedVowels++;
            }
        }
        console.log("There are " + countedVowels + " vowels.")
    }
    return countVowels;
})()("The quick brown fox");