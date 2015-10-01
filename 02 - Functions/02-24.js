/*
Write a JavaScript function to apply Bubble Sort algorithm.
Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]
*/
"use strict";
(function () {
    function bubbleSorter(pickedArray) {
        var sorted = false;
        var spare;
        while (!sorted) {
            for (var i = 1; i < pickedArray.length; i++) {
                if (pickedArray[i] > pickedArray[i - 1]) {
                    spare = pickedArray[i - 1];
                    pickedArray[i - 1] = pickedArray[i];
                    pickedArray[i] = spare;
                    break;
                } else {
                    if (i === pickedArray.length - 1) {
                        sorted = true;
                    }
                }
            }
        }
        console.log(pickedArray);
    }
    return bubbleSorter;
})()([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);