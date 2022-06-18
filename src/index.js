const Dot    = require("./Dot.js");
const Vector = require("./Vector.js");
const Matrix = require("./Matrix.js");
const other  = require("./other.js");



const cycloid    = other.cycloid;
const cosec      = other.cosec;
const sec        = other.sec;
const sinc       = other.sinc;
const cosc       = other.cosc;
const toRadians  = other.toRadians;
const toAngle    = other.toAngle;
const matrix2d   = other.matrix2d;
const matrix3d   = other.matrix3d;

const PI_TWO     = other.PI_TWO;
const TAU        = other.TAU;
const PI_HALF    = other.PI_HALF;
const PI_QUARTER = other.PI_QUARTER;
const RAD2DEG    = other.RAD2DEG;
const DEG2RAD    = other.DEG2RAD;
const SQRT3      = other.SQRT3;
const SQRT5      = other.SQRT5;
const FI         = other.FI;
const fi         = other.fi;




const install = () =>{
    
    Math.cycloid    = cycloid;
    Math.cosec      = cosec;
    Math.sec        = sec;
    Math.sinc       = sinc;
    Math.cosc       = cosc;
    Math.toRadians  = toRadians;
    Math.toAngle    = toAngle;
    Math.matrix2d   = matrix2d;
    Math.matrix3d   = matrix3d;
    
    Math.PI_TWO     = PI_TWO;
    Math.TAU        = TAU;
    Math.PI_HALF    = PI_HALF;
    Math.PI_QUARTER = PI_QUARTER;
    Math.RAD2DEG    = RAD2DEG;
    Math.DEG2RAD    = DEG2RAD;
    Math.SQRT3      = SQRT3;
    Math.SQRT5      = SQRT5;
    Math.FI         = FI;
    Math.fi         = fi;
};

module.exports = {
    
    install,
    
    Dot,
    Vector,
    Matrix,
    
    cycloid,
    cosec,sec,
    sinc,cosc,
    toRadians,toAngle,
    matrix2d,matrix3d,
    
    PI_TWO,TAU,
    PI_HALF,PI_QUARTER,
    RAD2DEG,DEG2RAD,
    SQRT3,SQRT5,
    FI,fi
    
};