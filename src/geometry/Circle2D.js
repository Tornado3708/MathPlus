class Circle2D{
    
    static diameter({x} = circle){return x*2;};
    static circumference({r} = circle){return r * Math.TAU;};
    static area({r} = circle){return r*r*Math.PI};
    
  constructor(...xyr){
    this.x = xyr[0]["x"] || xyr[0][0] || xyr[0] || 0;
    this.y = xyr[0]["y"] || xyr[0][1] || xyr[1] || 0;
    this.r = xyr[0]["r"] || xyr[0][2] || xyr[2] || 0;
    
    this.__proto__ = {};
    
    this.__proto__.translate = function(x,y){this.x = x;this.y = y;};
  }
}

module.exports = Circle2D;