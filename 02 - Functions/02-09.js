/*
Write a JavaScript function which accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
*/

"use strict";
(function () {
    function pickedType(values) {
        console.log(typeof values);
    }
    return pickedType;
})()(function () {
    console.log("Hello")
});