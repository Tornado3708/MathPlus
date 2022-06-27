class Triangle3D{
  x = [];
  y = [];
  z = [];
    constructor(...xyz){
    
      this.x[0] = xyz[0]["x1"] || xyz[0][0] || xyz[0] || 0;
      this.x[1] = xyz[0]["x2"] || xyz[0][3] || xyz[3] || 0;
      this.x[2] = xyz[0]["x3"] || xyz[0][6] || xyz[6] || 0;
      this.y[0] = xyz[0]["y1"] || xyz[0][1] || xyz[1] || 0;
      this.y[1] = xyz[0]["y2"] || xyz[0][4] || xyz[4] || 0;
      this.y[2] = xyz[0]["y3"] || xyz[0][7] || xyz[7] || 0;
      this.z[0] = xyz[0]["z1"] || xyz[0][2] || xyz[2] || 0;
      this.z[1] = xyz[0]["z2"] || xyz[0][5] || xyz[5] || 0;
      this.z[2] = xyz[0]["z3"] || xyz[0][8] || xyz[8] || 0;
    
      this.__proto__ = {};
    
      this.__proto__.translate = function(...xyz){
        this.x[0] = xyz[0]["x1"] || xyz[0][0] || xyz[0] || 0;
        this.x[1] = xyz[0]["x2"] || xyz[0][3] || xyz[3] || 0;
        this.x[2] = xyz[0]["x3"] || xyz[0][6] || xyz[6] || 0;
        this.y[0] = xyz[0]["y1"] || xyz[0][1] || xyz[1] || 0;
        this.y[1] = xyz[0]["y2"] || xyz[0][4] || xyz[4] || 0;
        this.y[2] = xyz[0]["y3"] || xyz[0][7] || xyz[7] || 0;
        this.z[0] = xyz[0]["z1"] || xyz[0][2] || xyz[2] || 0;
        this.z[1] = xyz[0]["z2"] || xyz[0][5] || xyz[5] || 0;
        this.z[2] = xyz[0]["z3"] || xyz[0][8] || xyz[8] || 0;
      };
  }
}

module.exports = Triangle3D;