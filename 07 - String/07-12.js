/*
Write a JavaScript function to uncamelize a string. 
Test Data :
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));
"hello world"
"hello-world"
"hello_world"
*/

"use strict";

(function () {
    function uncamelize(pickedWord, separator) {
        var decamelizedString = "";
        separator = separator || " ";
        for (var x = 0; x < pickedWord.length; x++) {
            if (pickedWord.charAt(x) === pickedWord.charAt(x).toLowerCase()) {
                decamelizedString += pickedWord.charAt(x);
            } else {
                decamelizedString += separator + pickedWord.charAt(x).toLowerCase();
            }
        }
        return decamelizedString;
    }

    console.log(uncamelize("helloWorld"));
    console.log(uncamelize('helloWorld', '-'));
    console.log(uncamelize('helloWorld', '_'));
})();
