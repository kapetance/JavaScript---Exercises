/*
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

"use strict";
(function () {
    function sorter() {
        console.log(this.sort(function (a, b) {
            return a > b;
        }));
    }

    var niska = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
    sorter.call(niska);

})();