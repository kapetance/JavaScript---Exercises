/*
Write a JavaScript function to remove a specific element from an array.

Test data :
console.log(remove_array_element([2, 5, 9, 6], 5));
[2, 9, 6]
*/

(function () {
    function removeElement(pickedArray, pickedNumber) {
        return pickedArray.filter(function (value) {
            return value !== pickedNumber;
        });
    }
    
    console.log(removeElement([2, 5, 9, 6], 5));
})();
