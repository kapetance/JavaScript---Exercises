/* Write a JavaScript function to generate a random integer. 
Test Data :
console.log(rand(20,1));
console.log(rand(1,10));
console.log(rand(6));
console.log(rand());
15
5
1
0 */
"use strict";
(function () {
    function rand(startRange, endRange) {
        var x = Math.min(startRange || 0, endRange || 0);
        var y = Math.max(startRange || 0, endRange || 0);
        return x + Math.round(Math.random() * (y - x));
    }

    console.log(rand(20, 10));
    console.log(rand(1, 10));
    console.log(rand(6));
    console.log(rand());
})();
