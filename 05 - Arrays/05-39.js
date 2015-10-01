/*
Write a JavaScript function to filter false, null, 0 and blank values from an array. 

Test Data :
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
[58, "abcd", true]
*/

"use strict";
(function () {
    function filtering() {
        return this.filter(function (value) {
            return value;
        });
    }
    console.log(filtering.call([58, '', 'abcd', true, null, false, 0]));
    
})();
