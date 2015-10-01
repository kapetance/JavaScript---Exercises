/*
Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
*/

"use strict";
(function removeDuplicate(pickedArray) {
    for (var x = 0; x < pickedArray.length; x++) {
        for (var y = x + 1; y < pickedArray.length; y++) {
            if ((pickedArray[x] !== undefined && pickedArray[y] !== undefined) && (pickedArray[x].toLowerCase() === pickedArray[y].toLowerCase())) {
                pickedArray[y] = undefined;
            }
        }
    }
    
    pickedArray = pickedArray.filter(function (value) {
        return value !== undefined;
    });
    
    console.log(pickedArray);
})(["Maja", "Neda", "Mile", "mAja", "Mirko", "Slavko3", "mAja", "MiRko", "SlavkO3",]);
