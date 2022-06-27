class Dot3D{
    
    static distance(dot_a,dot_b){
      let x = dot_a.x - dot_b.x;
      let y = dot_a.y - dot_b.y;
      let z = dot_a.z - dot_b.z;
      return Math.sqrt(x * x + y * y + z * z);
    };
    
    constructor(...xyz){
        
      this.x = xyz[0]["x"] || xyz[0][0] || xyz[0] || 0;
      this.y = xyz[0]["y"] || xyz[0][1] || xyz[1] || 0;
      this.z = xyz[0]["z"] || xyz[0][2] || xyz[2] || 0;
        
      this.__proto__.translate = (x=0,y=0,z=0)=>{
        this.x = x;
        this.y = y;
        this.z = z;
      };

      this.__proto__.add = (x=0,y=0,z=0)=>{
        this.x += x;
        this.y += y;
        this.z += z;
      };
        
      this.__proto__.sub  = (x=0,y=0,z=0)=>{
        this.x -= x;
        this.y -= y;
        this.z -= z;
      };
      
      this.__proto__.mult = (m=1)=>{
        this.x *= m;
        this.y *= m;
        this.z *= m;
      };
      
      this.__ptoto__.div  = (d=1)=>{
        this.x *= 1 / d;
        this.y *= 1 / d;
        this.z *= 1 / d;
      };
    }
};

module.exports = Dot3D;