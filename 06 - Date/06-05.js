/*
Write a JavaScript function to compare dates (i.e. greater than, less than or equal to). 

Test Data :
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'))); 
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'))); 
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
Output :
"Date1 = Date2" 
"Date1 > Date2" 
"Date2 > Date1"
*/
"use strict";
(function () {
    function compareDates(date1, date2) {
        date1 = Date.parse(date1);
        date2 = Date.parse(date2);

        switch (true) {
            case (date1 === date2):
                return "Date1 = Date2";
            case (date1 > date2):
                return "Date1 > Date2";
            case (date1 < date2):
                return "Date1 < Date2";
            default:
                return "Error!";
        }
    }
    console.log(compareDates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
    console.log(compareDates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
    console.log(compareDates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
})();
