/*
Write a JavaScript function to retrieve the value of a given property from all elements in an array.
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]
*/

"use strict";
(function () {
    function filtering() {
        var x = this.filter(function (value) {
            return value;
        });
        return x;
    }

    var n = [NaN, 0, 15, false, -22, '', undefined, 47, null];

    console.log(filtering.call(n));
})();