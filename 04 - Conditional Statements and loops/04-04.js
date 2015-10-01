/*
Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
Sample numbers : -5, -2, -6, 0, -1
Output : 0 
*/
"use strict";
(function () {
    function largest(pickedArray) {
        var largestNumber = pickedArray[0];
        for (var i = 1; i < pickedArray.length; i++) {
            if (pickedArray[i] > largestNumber) {
                largestNumber = pickedArray[i];
            }
        }
        console.log(largestNumber);
    }
    return largest;
})()([-5, -2, -6, 0, -1]);