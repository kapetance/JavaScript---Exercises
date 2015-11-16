/* Write a JavaScript function to calculate the combination of n and r. 
The formula is : n!/(r!*(n - r)!).
Test Data :
console.log(combinations(6, 2));
15
console.log(combinations(5, 3));
10 */
"use strict";
(function () {
    function factoriel(n) {
        if (n === 1) {
            return 1;
        } else {
            return n * factoriel(n - 1);
        }
    }

    function combinations(n, r) {
        return (factoriel(n) / (factoriel(r) * factoriel(n - r)));
    }
    console.log(combinations(6, 2));
    console.log(combinations(5, 3));
})();
