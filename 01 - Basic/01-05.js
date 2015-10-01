/*
 Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
*/

"use strict";
(function () {
    function wordRotate(word) {
        var i = 0;
        return function () {
            if (i === 0) {
                console.log(word);
            } else {
                console.log(word = word.slice(1, word.length) + word.slice(0, 1));
            }
            i++;
        };
    }

    var word = "w3resource";
    var rotating = wordRotate(word);
    setInterval(rotating, 1000);
})();