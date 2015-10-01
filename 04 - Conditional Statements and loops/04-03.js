/*
Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 
Sample numbers : 0, -1, 4
Output : 4, 0, -1 
*/
"use strict";
(function (a, b, c) {
    if (a > b && a > c) {
        if (b > c) {
            console.log(a + ", " + b + ", " + c);
        } else {
            console.log(a + ", " + c + ", " + b);
        }
    } else if (c > b && c > a) {
        if (b > a) {
            console.log(c + ", " + b + ", " + a);
        } else {
            console.log(c + ", " + a + ", " + b);
        }
    } else {
        if (c > a) {
            console.log(b + ", " + c + ", " + a);
        } else {
            console.log(b + ", " + a + ", " + c);
        }
    }
})(3, 1, -32);