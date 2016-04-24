/* Write a JavaScript function to get the least common multiple (LCM) of more than 2 integers. 
Test Data :
console.log(lcm_more_than_two_numbers([100,90,80,7]));
console.log(lcm_more_than_two_numbers([5,10,15,25]));
Output :
25200
150  */
"use strict";
(function () {
    function lcm(numbers) {
        var lowest = Math.min.apply(null, numbers);
        var highest = numbers.reduce((x, y) => {
            return x * y;
        });
        for (var x = 1; x <= highest; x++) {
            if (numbers.every((s) => {
                return x * lowest % s === 0;
            })) {
                return x * lowest;
            }
        }
    }
    console.log(lcm([100, 90, 80, 7]));
    console.log(lcm([5, 10, 15, 25]));
})();