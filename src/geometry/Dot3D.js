class Dot3D{
    
    static distance(dot_a,dot_b){
        let x = dot_a.x-dot_b.x;
        let y = dot_a.y-dot_b.y;
        let z = dot_a.z-dot_b.z;
        return Math.sqrt(x*x+y*y+z*z);
    };
    
    constructor(...x_y_z){
        
        this.x = x_y_z[0]["x"]||x_y_z[0][0]||x_y_z[0]||0;
        this.y = x_y_z[0]["y"]||x_y_z[0][1]||x_y_z[1]||0;
        this.z = x_y_z[0]["z"]||x_y_z[0][2]||x_y_z[2]||0;
        
        this.__proto__.translate = (x=0,y=0,z=0)=>{this.x=x;this.y=y;this.z=z;};

        this.__proto__.add  = (x=0,y=0,z=0) =>{this.x+=x;this.y+=y;this.z+=z;};
        this.__proto__.sub  = (x=0,y=0,z=0) =>{this.x-=x;this.y-=y;this.z-=z;};
        this.__proto__.mult = (m=1)=>{this.x*=m;this.y*=m;this.z*=m;};
        this.__ptoto__.div  = (d=1)=>{this.x*=1/d;this.y*=1/d;this.z*=1/d;};
        
    }
};
module.exports = Dot3D;