/*
 Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th. 
Test Data :
console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));
"1st"
"8th"
"301st"
"402nd"
*/
"use strict";
(function () {
    function humanized(pickedNumber) {

        if (typeof pickedNumber === "number") {
            pickedNumber = "" + pickedNumber;
        } else {
            return "No number";
        }
        var add = "";
        switch (pickedNumber.slice(-1)) {
            case "1":
                add = "st";
                break;
            case "2":
                add = "nd";
                break;
            case "3":
                add = "rd";
                break;
            default:
                add = "th";
        }
        return pickedNumber + add;
    }

    console.log(humanized());
    console.log(humanized(1));
    console.log(humanized(8));
    console.log(humanized(301));
    console.log(humanized(402));
})();