/*Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. 
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]*/
"use strict";
(function () {
    function filtering(pickedArray) {
        return pickedArray.filter(function (x) {
            return x;
        });
    }

    console.log(filtering([NaN, 0, 15, false, -22, '', undefined, 47, null]));
})();
