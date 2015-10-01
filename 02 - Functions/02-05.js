/*
 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
*/
"use strict";
(function () {
    function capitalise(pickedSentence) {
        var words = pickedSentence.split(" ");
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i].split("");
            words[i][0] = words[i][0].toUpperCase();
            words[i] = words[i].join("");
        }
        console.log(words.join(" "));
    }
    return capitalise;
})()("maja sa nedom ode na sajam");