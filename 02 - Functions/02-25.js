/*
Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America"
*/
"use strict";
(function () {
    function longestName(listOfNames) {
        var longestElement = 0;
        for (var x = 1; x < listOfNames.length; x++) {
            if (listOfNames[x].length > listOfNames[longestElement].length) {
                longestElement = x;
            }
        }
        console.log(listOfNames[longestElement]);
    }
    return longestName;
})()(["Australia", "Germany", "United States of America"]);