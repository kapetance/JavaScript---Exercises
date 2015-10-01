/*Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
Sample numbers : 3, -7, 2
Output : The sign is - 
*/
"use strict";
(function (a, b, c) {
    console.log("The sign is: " + (a * b * c < 0 ? "-" : "+"));
})(3, -6, 9);