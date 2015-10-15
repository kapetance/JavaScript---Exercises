/*
 Write a JavaScript function to convert a Unix timestamp to time.

Test Data :
console.log(Unix_timestamp(1412743274));
"6:41:14"
*/
"use strict";
(function () {
    function unixTimestamp() {

        function addZero() {
            return String(this).length < 2 ? "0" + String(this) : String(this);
        }

        var time = new Date(this * 1000);
        return addZero.call(time.getHours()) + ":" + addZero.call(time.getMinutes()) + ":" + addZero.call(time.getSeconds());
    }

    console.log(unixTimestamp.call(1412743274));
})();
