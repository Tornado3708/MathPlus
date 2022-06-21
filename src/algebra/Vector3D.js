class Vector3D{
  static ZERO={x:0,y:0,z:0};

  static BACK  ={x:0,y:0,z:-1};
  static DOWN  ={x:0,y:-1,z:0};
  static FRONT ={x:0,y:0,z:1};
  static LEFT  ={x:-1,y:0,z:0};
  static RIGHT ={x:1,y:0,z:0};
  static UP    ={x:0,y:1,z:0};
  
  static dotProduct(vec_a,vec_b){let x=vec_a.x*vec_b.x||0;let y=vec_a.y*vec_b.y||0;let z=vec_a.z*vec_b.z||0;return x+y+z;};
    
  static crossProduct(vec_a,vec_b){return{
    x:(vec_a.y*vec_b.z)-(vec_a.z*vec_b.y),
    y:(vec_a.z*vec_b.x)-(vec_a.x*vec_b.z),
    z:(vec_a.x*vec_b.y)-(vec_a.y*vec_b.x)};
    };
    
  static unitVector(vec){let length=vec.length();
    return{x:vec.x*(1/length),y:vec.y*(1/length),z:vec.z*(1/length)};
    };
    
    
  static angle = {//test
    xy:(vec_a,vec_b)=>{
      let x=vec_a.x*vec_b.x;
      let y=vec_a.y*vec_b.y;
      let length=Math.sqrt(vec_a.x*vec_a.x+vec_a.y*vec_a.y)*Math.sqrt(vec_b.x*vec_b.x+vec_b.y*vec_b.y);
      return(x+y)*(1/length)||0;
    },
    xz:(vec_a,vec_b)=>{
      let x=vec_a.x*vec_b.x;
      let z=vec_a.z*vec_b.z;
      let length=Math.sqrt(vec_a.x*vec_a.x+vec_a.z*vec_a.z)*Math.sqrt(vec_b.x*vec_b.x+vec_b.z*vec_b.z);
      return(x+z)*(1/length)||0;
    },
    yz:(vec_a,vec_b)=>{
      let y=vec_a.y*vec_b.y;
      let z=vec_a.z*vec_b.z;
      let length=Math.sqrt(vec_a.y*vec_a.y+vec_a.z*vec_a.z)*Math.sqrt(vec_b.y*vec_b.y+vec_b.z*vec_b.z);
      return(y+z)*(1/length)||0;
    },
    xyz : (vec_a,vec_b) => {
      let x = vec_a.x*vec_b.x;
      let y = vec_a.y*vec_b.y;
      let z = vec_a.z*vec_b.z;
      let length = Math.sqrt(vec_a.x*vec_a.x+vec_a.y*vec_a.y+vec_a.z*vec_a.z)*Math.sqrt(vec_b.x*vec_b.x+vec_b.y*vec_b.y+vec_b.z*vec_b.z);
      return (x+y+z)*(1/length)||0;
    }
  };
    
    constructor(...x_y_z){
      this.x = x_y_z[0]["x"] || x_y_z[0][0] || x_y_z[0] || 0;
      this.y = x_y_z[0]["y"] || x_y_z[0][1] || x_y_z[1] || 0;
      this.z = x_y_z[0]["z"] || x_y_z[0][2] || x_y_z[2] || 0;
    

      this.__proto__.add=(x=0,y=0,z=0)=>{this.x += x; this.y += y;this.z += z;};
      this.add.x=(x=0)=>{this.x+=x;};
      this.add.y=(y=0)=>{this.y+=y;};
      this.add.z=(z=0)=>{this.z+=z;};

      this.__proto__.sub=(x=0,y=0,z=0)=>{this.x-=x;this.y-=y;this.z-=z;};
      this.sub.x=(x=0)=>{this.x-=x;};
      this.sub.y=(y=0)=>{this.y-=y;};
      this.sub.z=(z=0)=>{this.z-=z;};
        
      this.__proto__.mult=(m=1)=>{this.x*=m;this.y*=m;this.z*=m;};
      this.mult.x=(m=1)=>{this.x*=m;};
      this.mult.y=(m=1)=>{this.y*=m;};
      this.mult.z=(m=1)=>{this.z*=m;};
        
      this.__proto__.div=(d=1)=>{this.x*=1/d;this.y*=1/d;this.z*=1/d;};
      this.div.x=(d=1)=>{this.x*=1/d;};
      this.div.y=(d=1)=>{this.y*=1/d;};
      this.div.z=(d=1)=>{this.z*=1/d;};

      this.__proto__.direction=()=>{let d=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);return{x:this.x/d||0,y:this.y/d||0,z:this.z/d||0};};
      this.direction().__proto__.div=function(d=1){
        return{x:1/d*this.x||0,y:1/d*this.y||0,z:1/d*this.z||0};
      };
      this.direction().__proto__.mult   = function(m=1){
        return{x:this.x*m||0,y:this.y*m||0,z:this.z*m||0};
      };
        
      this.__proto__.length=()=>{return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);};
}};

module.exports = Vector3D;