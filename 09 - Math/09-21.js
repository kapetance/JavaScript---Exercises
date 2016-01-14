/* Write a JavaScript function that Convert an integer into a Roman Numeral in javaScript. */

"use strict";
(function () {
    var romanNumbers = {
        0: {
            1: "I",
            2: "II",
            3: "III",
            4: "IV",
            5: "V",
            6: "VI",
            7: "VII",
            8: "VIII",
            9: "IX"
        },
        1: {
            1: "X",
            2: "XX",
            3: "XXX",
            4: "XL",
            5: "L",
            6: "LX",
            7: "LXX",
            8: "LXXX",
            9: "XC"
        },
        2: {
            1: "C",
            2: "CC",
            3: "CCC",
            4: "CD",
            5: "D",
            6: "DC",
            7: "DCC",
            8: "DCCC",
            9: "CM"
        },
        3: {
            1: "M",
            2: "MM",
            3: "MMM"
        }
    };

    function convertRoman(pickedNumber) {
        if (pickedNumber > 3999) {
            console.log("Preveliki broj");
            return false;
        }
        pickedNumber = pickedNumber.toString(10)
            .split("")
            .reverse()
            .map(function (a, index, niska) {
                return romanNumbers[index][a] || "";
            })
            .reverse()
            .join("");
        console.log(pickedNumber || "0");

    }

    convertRoman(1002);
    convertRoman(0);
    convertRoman(2975);
    convertRoman(4586);
})();
