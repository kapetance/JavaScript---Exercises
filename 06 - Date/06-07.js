/*
Write a JavaScript function to test whether a date is a weekend. 

Note : Use standard Saturday/Sunday definition of a weekend.
Test Data :
console.log(is_weekend('Nov 15, 2014')); 
console.log(is_weekend('Nov 16, 2014')); 
console.log(is_weekend('Nov 17, 2014'));
Output :
"weekend" 
"weekend" 
undefined
*/
"use strict";
(function () {
    function isWeekend() {
        var pickedDay = new Date(this);
        return (pickedDay.getDay() === 6 || pickedDay.getDay() === 0) ? "Weekend" : "Workday";
    }

    console.log(isWeekend.call('Nov 15, 2014'));
    console.log(isWeekend.call('Nov 16, 2014'));
    console.log(isWeekend.call('Nov 17, 2014'));
})();
