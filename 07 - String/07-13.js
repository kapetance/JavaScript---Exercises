/*
Write a JavaScript function to concatenates a given string n times (default is 1). 
Test Data :
console.log(repeat('Ha!'));
console.log(repeat('Ha!',2));
console.log(repeat('Ha!',3));
"Ha!"
"Ha!Ha!"
"Ha!Ha!Ha!"
*/

"use strict";
(function () {
    function repeater(word, timesToRepeat) {
        var finalWord = word;
        for (var x = 1; x < timesToRepeat; x++) {
            finalWord += word;
        }
        return finalWord;
    }
    console.log(repeater('Ha!'));
    console.log(repeater('Ha!', 2));
    console.log(repeater('Ha!', 3));
})();


//ES6
(function () {

    function repeat(pickedString, toRepeat) {
        return pickedString.repeat(toRepeat || 1);
    }
    console.log(repeat('Ha!'));
    console.log(repeat('Ha!', 2));
    console.log(repeat('Ha!', 3));
})();
