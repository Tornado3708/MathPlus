const MathPlus = require("./index.js");
MathPlus.install();
const {Matrix,Triangle2D,Complex} = MathPlus;
let complex;
for (let x = -Math.TAU;x < Math.TAU;x+=0.01){
        complex = new Complex(x,1);
        console.log(complex.phi());
        console.log(complex.zet());
        console.log(complex.abs());
    }

//console.log(MathPlus);
//console.log(Math);
