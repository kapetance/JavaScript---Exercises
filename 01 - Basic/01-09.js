/*
Write a JavaScript program to calculate days left until next Christmas
*/
"use strict";
(function () {
    var christmas = {
        "day": 7,
        "month": 0,
        "futureChristmas": function (year) {
            return new Date(year, this.month, this.day);
        }

    };
    var dayLength = 1000 * 60 * 60 * 24;
    var nextChristmas;
    var current = new Date();
    var currentDay = current.getDate();
    var currentMonth = current.getMonth();
    var currenthYear = current.getFullYear();

    if (currentMonth < christmas.month || (currentDay <= christmas.day && currentMonth === christmas.month)) {
        nextChristmas = christmas.futureChristmas(currenthYear).getTime() - current.getTime();
    } else {
        nextChristmas = christmas.futureChristmas(currenthYear + 1).getTime() - current.getTime();
    }

    nextChristmas = Math.ceil(nextChristmas / dayLength);
    console.log("Next christmas is in " + nextChristmas + " days.");
})();