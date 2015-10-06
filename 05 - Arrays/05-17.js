/*
Write a JavaScript program to shuffle an array.
*/
"use strict";
(function () {
    Array.prototype.shuffle = function () {
        function tempRandom() {
            var x = [];
            var y = [];
            for (var z = 0; z < this.length; z++) {
                x.push(z);
            }
            for (var n = 0; n < this.length; n++) {
                y.push(x.splice(Math.floor(Math.random() * x.length), 1));
            }
            return y;
        }

        var finalArray = [];
        var randomArray = tempRandom.call(this);
        for (var x = 0; x < this.length; x++) {
            finalArray.push(this[randomArray[x]]);
        }
        return finalArray;
    }

    function gener(length) {
        var arka = [];
        for (var x = 0; x < length; x++) {
            arka.push(x);
        }
        return arka;
    }

    var pickedArray = gener(1000)
    console.log(pickedArray.shuffle());
})();
