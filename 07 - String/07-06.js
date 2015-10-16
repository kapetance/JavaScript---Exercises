/*
Write a JavaScript function to hide email addresses to protect from unauthorized user. 
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
*/
"use strict";
(function () {
    function protectEmail(pickedString) {
        pickedString = pickedString.split("@");
        pickedString[0] = pickedString[0].substr(0, 5) + "...";
        return pickedString.join("@");
    }
    console.log(protectEmail("robin_singh@example.com"));
})();
