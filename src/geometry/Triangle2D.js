class Triangle2D{
  x=[];
  y=[];
    constructor(...xy){
      this.x[0] = xy[0]["x1"] || xy[0][0] || xy[0] || 0;
      this.x[1] = xy[0]["x2"] || xy[0][2] || xy[2] || 0;
      this.x[2] = xy[0]["x3"] || xy[0][4] || xy[4] || 0;
      this.y[0] = xy[0]["y1"] || xy[0][1] || xy[1] || 0;
      this.y[1] = xy[0]["y2"] || xy[0][3] || xy[3] || 0;
      this.y[2] = xy[0]["y3"] || xy[0][5] || xy[5] || 0;
      
      this.__proto__ = {};
      
      this.__proto__.translate = function(...xy){
        this.x[0] = xy[0]["x1"] || xy[0][0] || xy[0] || 0;
        this.x[1] = xy[0]["x2"] || xy[0][2] || xy[2] || 0;
        this.x[2] = xy[0]["x3"] || xy[0][4] || xy[4] || 0;
        this.y[0] = xy[0]["y1"] || xy[0][1] || xy[1] || 0;
        this.y[1] = xy[0]["y2"] || xy[0][3] || xy[3] || 0;
        this.y[2] = xy[0]["y3"] || xy[0][5] || xy[5] || 0;
      };
    }
}

module.exports = Triangle2D;