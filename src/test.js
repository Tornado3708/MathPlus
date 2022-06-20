const MathPlus = require("./index.js");
MathPlus.install();
const vec = new MathPlus.Vector(1,2,3);
console.log(vec.direction());
console.log(vec.direction().mult(2));
//console.log(Math);