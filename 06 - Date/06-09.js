/*
Write a JavaScript function to get the last day of a month. 

Test Data :
console.log(lastday(2014,0)); 
console.log(lastday(2014,1)); 
console.log(lastday(2014,11));
Output :
31 
28 
31
*/

"use strict";
(function () {
    function lastDay(year, month) {
        var thisMonth = new Date(year, month);
        var nextMonth = new Date(year, month+1);
        return (nextMonth - thisMonth) / (1000 * 60 * 60 * 24);
    }

    console.log(lastDay(2014, 0));
    console.log(lastDay(2014, 1));
    console.log(lastDay(2014, 11));

})();
