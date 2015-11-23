/*
Write a JavaScript function to find the first not repeated character.
Sample arguments : 'abacddbec'
Expected output : 'e'
*/
"use strict";
(function () {
    function nonRepeated(pickedString) {
        var first = "";
        for (var x = 0; x < pickedString.length; x++) {
            var counter = 0;
            for (var y = 0; y < pickedString.length; y++) {
                if (pickedString.charAt(y) === pickedString.charAt(x)) {
                    counter++;
                }
            }
            if (counter === 1) {
                return pickedString.charAt(x);
            }
        }
    }

    console.log(nonRepeated("abacddbec"));
})();
