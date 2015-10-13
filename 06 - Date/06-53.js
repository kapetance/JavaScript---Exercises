/*
Write a JavaScript function to get the month end date.
*/

"use strict";
(function () {
    function monthEnd() {
        var current = new Date(2012, 1, 23);
        var endMonth = current.setMonth(current.getMonth() + 1) - (current.getDate() * 1000 * 60 * 60 * 24);
        console.log(new Date(endMonth));
    }
    monthEnd();
})();
