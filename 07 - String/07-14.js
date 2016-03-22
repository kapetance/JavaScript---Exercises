/*
Write a JavaScript function to insert a string within a string at a particular position (default is 1).
Test Data :
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));
"We are doing some exercises."
"JavaScript We are doing some exercises."
"We are doing some JavaScript exercises."
*/
"use strict";
(function () {
    function insert(pickedString, insertWord, position) {
        insertWord = insertWord || "";
        position = position || 0;
        return pickedString.substr(0, position) + insertWord + pickedString.slice(position);
    }
    console.log(insert('We are doing some exercises.'));
    console.log(insert('We are doing some exercises.', 'JavaScript '));
    console.log(insert('We are doing some exercises.', 'JavaScript ', 18));
})();
