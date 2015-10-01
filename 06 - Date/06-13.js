/*
Write a JavaScript function that will return the number of minutes in hours and minutes. 

Test Data :
console.log(timeConvert(200));
Output :
"200 minutes = 3 hour(s) and 20 minute(s)."
*/

"use strict";
(function () {
    function timeConvert(minutes) {
        var hours = Math.floor(minutes / 60);
        return minutes + " minutes: hours " + hours + " and " + (minutes - (hours * 60)) + " minutes";
    }
    console.log(timeConvert(200));

})();
