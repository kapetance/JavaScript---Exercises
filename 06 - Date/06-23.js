/*
 Write a JavaScript function to get English ordinal suffix for the day of the month, 2 characters (st, nd, rd or th.). 
Test Data :
dt = new Date(2015, 10, 1); 
console.log(english_ordinal_suffix(dt));
"1st"
*/
"use strict";
(function () {
    function suffix(pickedDate) {
        var listOfSuffixes = ["th", "st", "nd", "rd"];
        var temp = "";
        pickedDate = String(pickedDate.getDate());
        temp = pickedDate.slice(-1);
        switch (true) {
            case temp === "1":
                return pickedDate + "st";
            case temp === "2":
                return pickedDate + "nd";
            case temp === "3":
                return pickedDate + "rd";
            default:
                return pickedDate + "th";
        }
    }
    console.log(suffix(new Date(2015, 10, 15)));
})();
