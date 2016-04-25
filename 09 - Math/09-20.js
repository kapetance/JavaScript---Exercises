/*  Write a JavaScript program to evaluate binomial coefficients. 
Note :
Binomial coefficient : According to Wikipedia - In mathematics, binomial coefficients are a family of positive integers that occur as coefficients in the binomial theorem. They are indexed by two nonnegative integers; the binomial coefficient indexed by n and k is usually written \tbinom nk. It is the coefficient of the x k term in the polynomial expansion of the binomial power (1 + x) n. Under suitable circumstances the value of the coefficient is given by the expression :

Arranging binomial coefficients into rows for successive values of n, and in which k ranges from 0 to n, gives a triangular array called Pascal's triangle.

Test Data :
console.log(binomial(8,3));
console.log(binomial(10,2));
Output :
56
45 */
"use strict";
(function () {
    function fact(pickedNumber) {
        if (pickedNumber === 1) {
            return 1
        } else {
            return pickedNumber * fact(pickedNumber - 1);
        }
    }

    function binomial(n, k) {
        return fact(n) / (fact(n - k) * fact(k));
    }

    console.log(binomial(8, 3));
    console.log(binomial(10, 2));
})();
