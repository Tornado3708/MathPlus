class Line3D{
  static length(line){
    let x = line.x1-line.x2; let y = line.y1-line.y2;let z = line.z1-line.z2;
    return Math.sqrt(x*x+y*y+z*z);
  }

    constructor(...x_y_z){

      this.x1 = x_y_z[0]["x1"]||x_y_z[0][0]||x_y_z[0]||0;
      this.y1 = x_y_z[0]["y1"]||x_y_z[0][1]||x_y_z[1]||0;
      this.z1 = x_y_z[0]["z1"]||x_y_z[0][2]||x_y_z[2]||0;
      this.x2 = x_y_z[0]["x2"]||x_y_z[0][3]||x_y_z[3]||0;
      this.y2 = x_y_z[0]["y2"]||x_y_z[0][4]||x_y_z[4]||0;
      this.z2 = x_y_z[0]["z2"]||x_y_z[0][5]||x_y_z[5]||0;
        
      this.__proto__.length = () =>{
        let x = this.x1-this.x2;
        let y = this.y1-this.y2;
        let z = this.z1-this.z2;
        return Math.sqrt(x*x+y*y+z*z);
      };
    }
}

module.exports = Line3D;