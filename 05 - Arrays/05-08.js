/*
Write a JavaScript program to find the most frequent item of an array. 
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times ) 
*/

"use strict";
(function () {
    function mostFrequent(pickedArray) {
        var elements = {};
        var longest = 0;
        var frequentElement;
        pickedArray.forEach(function (x) {
            elements[x] ? elements[x].push(x) : elements[x] = [x];
        });
        for (var x in elements) {
            if (elements[x].length > longest) {
                longest = elements[x].length;
                frequentElement = x;
            }
        }
        console.log(frequentElement, longest);
    }
    var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    mostFrequent(arr1);
})();
//-------------------------------------
(function () {
    function mostFrequent(pickedArray) {
        var curentElement = pickedArray[0],
            offtenElement, maxLength = 1,
            currentLength = 0;
        pickedArray.sort();
        for (var x = 1; x < pickedArray.length; x++) {
            if (pickedArray[x] === curentElement) {
                currentLength++;
                if (currentLength > maxLength) {
                    maxLength = currentLength;
                    offtenElement = pickedArray[x];
                }
            } else {
                curentElement = pickedArray[x];
                currentLength = 1;
            }
        }
        console.log(offtenElement, maxLength);
    }
    var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    mostFrequent(arr1);
})();
