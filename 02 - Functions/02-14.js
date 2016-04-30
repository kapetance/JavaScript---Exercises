/*
Write a JavaScript function to convert an amount to coins. 
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1
*/
"use strict";
(function () {
    function amountToCoins(amount,coins) {
        var finalCoins = [];
        while (amount > 0) {
            for(var x = 0; x < coins.length; x++) {
                if(amount - coins[x] >=0 ) {
                    amount-=coins[x];
                    finalCoins.push(coins[x]);
                    break;
                }
            }
        }
        return finalCoins;
    }
    console.log(amountToCoins(46, [25, 10, 5, 2, 1]));
    console.log(amountToCoins(123, [25, 10, 5, 2, 1]));
})();