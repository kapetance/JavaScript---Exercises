/*
Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = temperature in fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C 
*/
"use strict";
(function () {
    function convert(cels, far) {
        celToFar(cels);
        farToCel(far);
    }

    function celToFar(cels) {
        var farenheits = ((cels / 5) * 9) + 32;
        console.log(cels + "°C is " + farenheits + "°F");
    }

    function farToCel(far) {
        var celsius = ((far - 32) / 9) * 5
        console.log(far + "°F is " + celsius + "°F");
    }

    return convert;
})()(60, 45);