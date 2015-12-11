/*
Write a JavaScript function to get the function name.
*/
"use strict";
(function () {
    function nameFunction(funct) {
        console.log(funct.name);
    }
    
    nameFunction(function test() {});
})();
