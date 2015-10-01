/*
 We have the following arrays :
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
- - - - - - - - - - - - -
Note : Use ordinal numbers to tell their position.
*/

"use strict";
(function () {
    function ordinal(value, index) {
        var o = ["th", "st", "nd", "rd"];
        var indexOrd = (index + 1).toString(10).split("").pop();
        if (indexOrd === "1") {
            return index + 1 + o[1] + " choice is " + value;
        } else if (indexOrd === "2") {
            return index + 1 + o[2] + " choice is " + value;
        } else if (indexOrd === "3") {
            return index + 1 + o[3] + " choice is " + value;
        } else {
            return index + 1 + o[0] + " choice is " + value;
        }
    }

    var pickedArray = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ", "Red", "Orange", "Violet", "Indigo", "Yellow "];
    console.log(pickedArray.map(ordinal));
})();