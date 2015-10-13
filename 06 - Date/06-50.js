/*
Write a JavaScript function to get the week start date.
*/
"use strict";
(function () {
    function weekstart() {
        var current = new Date();
        return (new Date(current.setDate(current.getDate() - current.getDay() + 1)));
    }
    console.log(weekstart());
})();
