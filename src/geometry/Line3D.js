class Line3D{
  static length(line){
    let x = line.x1 - line.x2;
    let y = line.y1 - line.y2;
    let z = line.z1 - line.z2;
    return Math.sqrt(x * x + y * y + z * z);
  }

    constructor(...xyz){

      this.x1 = xyz[0]["x1"] || xyz[0][0] || xyz[0] || 0;
      this.y1 = xyz[0]["y1"] || xyz[0][1] || xyz[1] || 0;
      this.z1 = xyz[0]["z1"] || xyz[0][2] || xyz[2] || 0;
      this.x2 = xyz[0]["x2"] || xyz[0][3] || xyz[3] || 0;
      this.y2 = xyz[0]["y2"] || xyz[0][4] || xyz[4] || 0;
      this.z2 = xyz[0]["z2"] || xyz[0][5] || xyz[5] || 0;
        
      this.__proto__.length = () =>{
        let x = this.x1 - this.x2;
        let y = this.y1 - this.y2;
        let z = this.z1 - this.z2;
        return Math.sqrt(x * x + y * y + z * z);
      };
    }
}

module.exports = Line3D;