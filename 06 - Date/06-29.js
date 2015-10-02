/*
Write a JavaScript function to get a two digit representation of a year. 
Examples : 79 or 04
Test Data :
dt = new Date(1989, 10, 1); 
console.log(sort_year(dt));
"89"
*/
"use strict";
(function () {
    function shortYear(pickedDate) {
        return String(pickedDate.getFullYear()).slice(-2);
    }

    console.log(shortYear(new Date(1989, 10, 1)));
})();
