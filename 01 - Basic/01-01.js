/*
Write a JavaScript program to display the current day and time in the following format. 
Sample Output : Today is : Friday.
Current time is : 4 PM : 50 : 22
*/

"use strict";

(function getCurrentDay() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var current = new Date();
    console.log("Today is " + days[current.getDay()] + ".");
})();

(function getCurrentTime() {
    var current = new Date();
    var hours = current.getHours() > 12 ? current.getHours() - 12 + " PM" : current.getHours() + " AM";
    var minutes = current.getMinutes();
    var seconds = current.getSeconds();
    console.log("Current time is: " + hours + " : " + minutes + " : " + seconds + ".");
})();         