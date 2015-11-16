var fs = require("fs");
var r = "";
for (var x = 1; x < 44; x++) {
    r = r + 'echo ' + '"/*  */" >> 09-' + (x < 10 ? '0' + x : x) + '.js \n';
}

fs.writeFile("batcher.bat", r, function(err) {
    if(err) {
        throw err;
    }
    console.log("Sačuvano");
});

