/*
Write a JavaScript function that generates a string id (specified length) of random characters.
Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/
(function () {
    function generate(n) {
        var sampleList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var generatedWord = "";
        for (var i = 0; i < n; i++) {
            generatedWord = generatedWord + sampleList.charAt(Math.floor(Math.random() * 62));
        }
        console.log(generatedWord);
    }
    return generate;
})()(30);