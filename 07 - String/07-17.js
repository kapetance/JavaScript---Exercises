/*
Write a JavaScript function to chop a string into chunks of a given length. 
Test Data :
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
["w3resource"]
["w3", "re", "so", "ur", "ce"]
["w3r", "eso", "urc", "e"]
*/

"use strict";
(function () {
    function stringChop(pickedWord, chunkLength) {
        chunkLength = chunkLength || pickedWord.length;
        var chunkList = [];
        for (var x = 0; x < pickedWord.length; x += chunkLength) {
            chunkList.push(pickedWord.substr(x, chunkLength));
        }
        return chunkList;
    }

    console.log(stringChop("w3resource"));
    console.log(stringChop("w3resource", 2));
    console.log(stringChop("w3resource", 3));
})();
