/*
Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy 
*/
"use strict";
(function () {
    function addZero(picked) {
        picked = picked.toString();
        return picked.length < 2 ? "0" + picked : picked;
    }

    function currentDate() {
        var current = new Date();
        var day = addZero(current.getDate());
        var month = addZero(current.getMonth() + 1);
        var year = current.getFullYear();
        console.log(day + "/" + month + "/" + year);
    }
    return currentDate;
})()();