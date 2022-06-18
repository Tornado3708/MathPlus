const cycloid = {
    x:(radian ,r=1)=>{return(radian-Math.sin(radian))*r;},
    y:(radian ,r=1)=>{return(1-Math.cos(radian))*r;}
};


const cosec        = (x=0)       =>{ return 1/Math.sin(x)   || 0;   };
const sec          = (x=0)       =>{ return 1/Math.cos(x)   || 0;   };
const sinc         = (x=0)       =>{ return (Math.sin(x)/x) || 0;   };
const cosc         = (x=0)       =>{ return (Math.cos(x)/x) || 0;   };
const toRadians    = (angle=0)   =>{ return Math.RAD_DEG * angle;   };
const toAngle      = (radians=0) =>{ return Math.DEG_RAD * radians; };


const matrix2d     =(w,h,r=1,tx=0,ty=0)=>{let d=Math.sqrt(w*w+h*h)||0;
    return{x:w/d*r+tx||tx,y:h/d*r+ty||ty};
};


const matrix3d   = (w,h,l,r=1,tx=0,ty=0,tz=0)=>{
    let d=Math.sqrt(w*w+h*h+l*l)||0;
    return{x:w/d*r+tx||yx,y:h/d*r+ty||ty,z:l/d*r+tz||tz};
};


const PI_TWO = TAU = 6.283185307179586;
const PI_HALF      = 1.5707963267948966;
const PI_QUARTER   = 0.7853981633974483;
const RAD2DEG      = 0.017453292519943295;
const DEG2RAD      = 57.29577951308232;
const SQRT3        = 1.7320508075688772;
const SQRT5        = 2.23606797749979;
const FI           = 1.618033988749895;
const fi           = 0.618033988749895;


module.exports = {
    cycloid,
    cosec,
    sec,
    sinc,
    cosc,
    toRadians,
    toAngle,
    matrix2d,
    matrix3d,
    PI_TWO,
    TAU,
    PI_HALF,
    PI_QUARTER,
    RAD2DEG,
    DEG2RAD,
    SQRT3,
    SQRT5,
    FI,
    fi
};
