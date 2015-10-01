/*
 Write a simple JavaScript program to join all elements of the following array into a string. 
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/

"use strict";
(function () {
    function joinElements(pickedArray, joiner) {
        return pickedArray.join(joiner);
    }
    console.log(joinElements(["Red", "Green", "White", "Black"], "+"));
    console.log(joinElements(["Red", "Green", "White", "Black"], ","));
})();