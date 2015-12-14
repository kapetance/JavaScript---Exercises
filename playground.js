var x = [1,2,3,45];
var y = [5,6,7,8];
x.push.apply(x, y);
console.log(x)
