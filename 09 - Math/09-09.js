/*  Write a JavaScript function to find the GCD (greatest common divisor) of more than 2 integers. 
Test Data :
console.log(gcd_more_than_two_numbers([3,15,27]));
console.log(gcd_more_than_two_numbers([5,10,15,25]));
Output :
3
5 */
"use strict";
(function () {
    function gcdMore(pickedArray) {
        var counter = 0;
        var lowest = (function () {
            var temp = pickedArray[0];
            for (var x = 1; x < pickedArray.length; x++) {
                temp = Math.min(temp, pickedArray[x]);
            }
            return temp;
        })();
        while (counter < pickedArray.length) {
            counter = 0;
            for (var x = 0; x < pickedArray.length; x++) {
                if (pickedArray[x] % lowest === 0) {
                    counter++;
                }
            }
            lowest--;
        }
        return lowest + 1;
    }

    console.log(gcdMore([15, 27]));
    console.log(gcdMore([5, 10, 15, 25]));
})();
