/*
Write a JavaScript function to get the amount of days of a year. 

Test Data :
console.log(days_of_a_year(2015)); 
365
console.log(days_of_a_year(2016));
366
*/
"use strict";
(function () {
    function daysYear() {
        return ((Date.parse(String(this + 1)) - Date.parse(String(this))) / (1000 * 60 * 60 * 24));
    }
    console.log(daysYear.call(2015));
    console.log(daysYear.call(2017));
})();
