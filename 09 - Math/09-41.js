/* Write a JavaScript function to count the digits of an integer. */

"use strict";
(function () {
    Number.prototype.countDigits = function() {
        return ("" + this).length;
    }
    
    console.log((567865).countDigits());
})();
