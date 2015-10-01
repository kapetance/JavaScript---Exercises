/*
Write a JavaScript program to find the armstrong numbers of 3 digits.
Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. 
*/
"use strict";
(function () {
    function armstrongNumber(pickedNumber) {
        function cubeIt(n) {
            return n * n * n;
        }
        
        var a = Math.floor(pickedNumber / 100);
        var b = Math.floor((pickedNumber - (a * 100)) / 10);
        var c = pickedNumber - (a * 100) - (b * 10);

        if ((cubeIt(a) + cubeIt(b) + cubeIt(c)) === pickedNumber) {
            console.log("Number " + pickedNumber + " is Armstrong number.");
        } else {
            console.log("Number " + pickedNumber + " is not Armstrong number.");
        }
    }
    return armstrongNumber;
})()(407);