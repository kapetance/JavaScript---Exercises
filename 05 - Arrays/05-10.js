/*
Write a JavaScript program which prints the elements of the following array.
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
------
------
*/

"use strict";
(function () {
    var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    for (var x = 0; x < a.length; x++) {
        console.log("row " + x);
        for (var y = 0; y < a[x].length; y++) {
            console.log(a[x][y]);
        }
    }
})();