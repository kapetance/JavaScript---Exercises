/* Write a JavaScript function to get the greatest common divisor (gcd) of two integers. 
Note :
According to Wikipedia - In mathematics, the greatest common divisor (gcd) of two or more integers, when at least one of them is not zero, is the largest positive integer that divides the numbers without a remainder. For example, the GCD of 8 and 12 is 4.

Test Data :
console.log(gcd_two_numbers(12, 13));
console.log(gcd_two_numbers(9, 3));
Output :
1
3 */
"use strict";
(function () {
    function gcdTwoNumbers(x, y) {
        var gcd = Math.min(x, y);
        while (!(x % gcd === 0 && y % gcd === 0)) {
            gcd--;
        }
        return gcd;
    }
    console.log(gcdTwoNumbers(12, 13));
    console.log(gcdTwoNumbers(9, 3));
    console.log(gcdTwoNumbers(8, 12));
})();
