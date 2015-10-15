/*
Write a JavaScript function to get the quarter (1 to 4) of the year. 

Test Data :
console.log(quarter_of_the_year(new Date(2015, 1, 21))); 
2
console.log(quarter_of_the_year(new Date(2015, 10, 18)));
4
*/
"use strict";
(function () {
    function quarter() {
        return Math.ceil((this.getMonth() + 1) / 3);
    }

    console.log(quarter.call(new Date(2015, 1, 21)));
    console.log(quarter.call(new Date(2015, 10, 18)));
})();
