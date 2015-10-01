/*
Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. 
Sample Output :
"0 is even"
"1 is odd"
"2 is even"
----------
---------- 
*/
"use strict";
(function () {
    for (var x = 0; x<=15; x++) {
        console.log(x + " " + (x % 2 === 0 ? "is even" : "is odd"));
    }
})();