/* Write a JavaScript function to round up an integer value to the next multiple of 5. 
Test Data :
console.log(int_round5(32));
35
console.log(int_round5(137));
140 */
"use strict";
(function () {
    function intRounds(pickedNumber) {
        return 5 * Math.ceil(pickedNumber / 5);
    }
    console.log(intRounds(32));
    console.log(intRounds(137));
})();
