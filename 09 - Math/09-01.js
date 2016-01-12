/* Write a JavaScript function to convert a number from one base to another. 
Note : Both bases must be between 2 and 36.
Test Data :
console.log(base_convert('E164',16,8));
console.log(base_convert(1000,2,8));
"160544"
"10" */
"use strict";
(function () {
    function baseConvert(pickedNumber, oldBase, newBase) {
        return parseInt(pickedNumber, oldBase).toString(newBase);
    }

    console.log(baseConvert('E164', 16, 8));
    console.log(baseConvert(1000, 2, 8));
})();
