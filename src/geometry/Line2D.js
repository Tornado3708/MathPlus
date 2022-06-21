class Line2D{
  static length(line){
    let x = line.x1-line.x2; let y = line.y1-line.y2;
    return Math.sqrt(x*x+y*y);
  }

    constructor(...x_y){

      this.x1 = x_y[0]["x1"]||x_y[0][0]||x_y[0]||0;
      this.y1 = x_y[0]["y1"]||x_y[0][1]||x_y[1]||0;
      this.x2 = x_y[0]["x2"]||x_y[0][2]||x_y[2]||0;
      this.y2 = x_y[0]["y2"]||x_y[0][3]||x_y[3]||0;
        
      this.__proto__.length = () =>{
        let x = this.x1-this.x2;
        let y = this.y1-this.y2;
        return Math.sqrt(x*x+y*y);
      };
    }
}

module.exports = Line2D;