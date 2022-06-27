const Circle2D    = require("./geometry/Circle2D.js");
const Complex     = require("./algebra/Complex.js");
const Dot2D       = require("./geometry/Dot2D.js");
const Dot3D       = require("./geometry/Dot3D.js");
const Line2D      = require("./geometry/Line2D.js");
const Line3D      = require("./geometry/Line3D.js");
const Matrix      = require("./algebra/Matrix.js");
//const Tensor      = require("./algebra/Tensor.js");
const Triangle2D  = require("./geometry/Triangle2D.js");
const Triangle3D  = require("./geometry/Triangle3D.js");
const Rectangle2D = require("./geometry/Rectangle2D.js");
const Vector2D    = require("./algebra/Vector2D.js");
const Vector3D    = require("./algebra/Vector3D.js");
const other       = require("./other.js");



const cycloid    = other.cycloid;
const cosec      = other.cosec;
const sec        = other.sec;
const sinc       = other.sinc;
const cosc       = other.cosc;
const cas        = other.cas;
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
const PHI        = other.PHI;
const phi        = other.phi;




const install = () =>{
    
    Math.cycloid    = cycloid;
    Math.cosec      = cosec;
    Math.sec        = sec;
    Math.sinc       = sinc;
    Math.cosc       = cosc;
    Math.cas        = cas;
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
    Math.PHI        = PHI;
    Math.phi        = phi;
};

module.exports = {
    
    install,
    
    Circle2D,
    Complex,
    Dot2D,
    Dot3D,
    Line2D,
    Line3D,
    Matrix,
    Triangle2D,
    Triangle3D,
    Rectangle2D,
    Vector2D,
    Vector3D,
    
    cycloid,
    cosec,sec,
    sinc,cosc,
    toRadians,toAngle,
    matrix2d,matrix3d,
    
    PI_TWO,TAU,
    PI_HALF,PI_QUARTER,
    RAD2DEG,DEG2RAD,
    SQRT3,SQRT5,
    PHI,phi
    
};