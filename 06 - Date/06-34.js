/*
Write a JavaScript function to get 24-hour format of an hour without leading zeros.  
Test Data :
dt = new Date(1989, 10, 1); 
console.log(hours_without_zeroes(dt)); 
0
*/
"use strict";
(function () {
    function hours() {
        return this.getHours();
    }

    console.log(hours.call(new Date(1989, 10, 1)));
})();
