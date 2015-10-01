/*
Write a JavaScript function which returns the n rows by n columns identity matrix.
*/
"use strict";
(function () {
    function identityMatrix(n) {
        var row = "";
        for (var i = 1; i <= n; i++) {
            for (var j = 1; j <= n; j++) {
                if (j === i) {
                    row = row + "1 ";
                } else {
                    row = row + "0 ";
                }
                if (j === n) {
                    row = row + "\n";
                }
            }
        }
        console.log(row);
    }
    return identityMatrix;
})()(5);