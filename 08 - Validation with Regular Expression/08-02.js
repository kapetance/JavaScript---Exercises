/*Write a JavaScript program to check a credit card number. */
(function () {
    var patern = /(\d{4}-){3}\d{4}/;
    console.log(patern.test("5673-2342-4324-4324"));
    console.log(patern.test("5673-2as2-43-4324"));
    console.log(patern.test("5673-2342-43782-432"));
})();