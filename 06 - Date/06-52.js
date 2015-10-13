/*
 Write a JavaScript function to get the month start date.
*/

"use strict";
(function () {
    function monthStart() {
        var current = new Date();
        return new Date(current.setDate(1));
    }
    console.log(monthStart());
})();
