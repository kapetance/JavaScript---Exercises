/*
Write a JavaScript program to check whether a number is even or not.
*/
(function () {
    function evenOdd(pickedNumber) {
        if (pickedNumber===0) {
            return "Paran";
        } else if (pickedNumber === 1){
            return "Neparan";
        } else {
            return evenOdd(pickedNumber-2);
        }
    }
    
    console.log(evenOdd(26));
})();