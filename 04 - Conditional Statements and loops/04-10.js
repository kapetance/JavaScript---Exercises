/*
Write a JavaScript program to construct the following pattern, using a nested for loop.

*  
* *  
* * *  
* * * *  
* * * * *  

*/

"use strict";
(function (n) {
    for (var i = 1; i <= n; i++) {
        var starField = "*";
        for (var y = 1; y < i; y++) {
            starField = starField + "*";
        }
        console.log(starField);
    }
})(5);