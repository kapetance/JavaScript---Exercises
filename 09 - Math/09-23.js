/*  Write a JavaScript function to create a UUID identifier. 
Note :
According to Wikipedia - A universally unique identifier (UUID) is an identifier standard used in software construction. A UUID is simply a 128-bit value. The meaning of each bit is defined by any of several variants. For human-readable display, many systems use a canonical format using hexadecimal text with inserted hyphen characters. For example : de305d54-75b4-431b-adb2-eb6b9e546014 */
"use strict";
(function () {

    function returnHex() {
        var list = "0123456789abcdef";
        return list.substr(Math.round(Math.random() * 15), 1)
    }

    function uuidCreator() {
        var scheme = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";
        return scheme.split("")
            .map(x => x === "x" ? returnHex() : x)
            .join("");
    }

    console.log(uuidCreator());
})();