/*
Write a JavaScript function to get a random item from an array.
*/

"use strict";
(function () {
    function randomItem() {
        return this[Math.floor(Math.random() * this.length)];
    }

    var elementi = ["USD", "EUR", "RSD", "JPY", "CAD"];
    console.log(randomItem.call(elementi));
})();