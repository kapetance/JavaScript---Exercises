/*
 Write a JavaScript function to get the maximum date from an array of dates.

Test Data :
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/02/02"
*/

"use strict";
(function () {
    Array.prototype.maximum = function () {
        var x = this[0];
        for (var z = 1; z < this.length; z++) {
            if (this[z] > x) {
                x = this[z];
            }
        }
        return x;
    }

    function biggestDate(elements) {
        var times = [];
        for (var x = 0; x < elements.length; x++) {
            times.push(Date.parse(elements[x]));
        }
        var biggest = new Date(times.maximum());
        return biggest.getDate() + "/" + (biggest.getMonth() + 1) + "/" + biggest.getFullYear();
    }

    console.log(biggestDate(['2015/02/01', '2015/02/02', '2015/01/03']));
})();
