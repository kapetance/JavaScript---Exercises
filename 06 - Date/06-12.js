/*
Write a JavaScript function to get the minimum date from an array of dates. 

Test Data :
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));
Output :
"2015/01/03"
*/
"use strict";
(function () {
    Array.prototype.minimum = function () {
        var x = this[0];
        for (var z = 1; z < this.length; z++) {
            if (this[z] < x) {
                x = this[z];
            }
        }
        return x;
    }

    function smallestDate(elements) {
        var times = [];
        for (var x = 0; x < elements.length; x++) {
            times.push(Date.parse(elements[x]));
        }
        var smallest = new Date(times.minimum());
        return smallest.getDate() + "/" + (smallest.getMonth() + 1) + "/" + smallest.getFullYear();
    }

    console.log(smallestDate(['2015/02/01', '2015/02/02', '2015/01/03']));
})();
