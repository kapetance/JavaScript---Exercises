/*
 Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
 Heron's Formula
*/

(function area(a, b, c) {
    var p = (a + b + c) / 2;
    var calculatedArea = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log(calculatedArea.toFixed(2)); //Rounding to 2 decimal places.
})(5, 6, 7);