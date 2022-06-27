class Line2D{
  static length(line){
    let x = line.x1 - line.x2;
    let y = line.y1 - line.y2;
    return Math.sqrt(x * x + y * y);
  }

    constructor(...xy){

      this.x1 = xy[0]["x1"] || xy[0][0] || xy[0] || 0;
      this.y1 = xy[0]["y1"] || xy[0][1] || xy[1] || 0;
      this.x2 = xy[0]["x2"] || xy[0][2] || xy[2] || 0;
      this.y2 = xy[0]["y2"] || xy[0][3] || xy[3] || 0;
      
      this.__proto__ = {};
      
      this.__proto__.translate = (...xy)=>{
        this.x1 = xy[0]["x1"] || xy[0][0] || xy[0] || 0;
        this.y1 = xy[0]["y1"] || xy[0][1] || xy[1] || 0;
        this.x2 = xy[0]["x2"] || xy[0][2] || xy[2] || 0;
        this.y2 = xy[0]["y2"] || xy[0][3] || xy[3] || 0;
      };
      
      this.__proto__.length = () =>{
        let x = this.x1 - this.x2;
        let y = this.y1 - this.y2;
        return Math.sqrt(x * x + y * y);
      };
    }
}

module.exports = Line2D;