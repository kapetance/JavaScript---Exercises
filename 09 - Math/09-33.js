/* Write a JavaScript function to convert degrees to radians. 
Test Data :
console.log(degrees_to_radians(45));
0.7853981633974483 */
(function () {
    function degreesRadians(pickedValue) {
        return (pickedValue / (180 / Math.PI));
    }
    console.log(degreesRadians(45));
})();
