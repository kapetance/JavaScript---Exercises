/*
Write a JavaScript function to get the week end date
*/

"use strict";
(function () {
    function weekend() {
        var current = new Date();
        return new Date(current.setDate(current.getDate() + (7 - current.getDay())));
    }
    console.log(weekend());
})();
