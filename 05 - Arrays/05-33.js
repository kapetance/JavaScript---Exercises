/*
Write a JavaScript script to empty an array keeping the original.
*/

"use strict";
(function () {
    var x = [1, 2, 3, 4, 5, 6, 7];
    var c = x.slice();
    c.length = 0;
    console.log(c);
    console.log(x);
})();