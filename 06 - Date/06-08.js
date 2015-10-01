/*
Write a JavaScript function to get difference between two dates in days. 

Test Data :
console.log(date_diff_indays('04/02/2014', '11/04/2014')); 
console.log(date_diff_indays('12/02/2014', '11/04/2014'));
Output :
216 
-28
*/
"use strict";
(function () {
    function dateDiffIndays(d1, d2) {
        d1 = Date.parse(d1);
        d2 = Date.parse(d2);
        return Math.round((d2 - d1) / (24 * 60 * 60 * 1000));
    }

    console.log(dateDiffIndays('04/02/2014', '11/04/2014'));
    console.log(dateDiffIndays('12/02/2014', '11/04/2014'));
})();
