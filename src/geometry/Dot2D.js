class Dot2D{
    
    static distance(dot_a,dot_b){
        let x = dot_a.x - dot_b.x;
        let y = dot_a.y - dot_b.y;
        return Math.sqrt(x * x + y * y);
    };
    
    constructor(...xy){
        
      this.x = xy[0]["x"] || xy[0][0] || xy[0] || 0;
      this.y = xy[0]["y"] || xy[0][1] || xy[1] || 0;

      this.__proto__.translate = (x=0,y=0)=>{this.x=x;this.y=y;;};

      this.__proto__.add  = (x=0,y=0)=>{
        this.x += x;
        this.y += y;
      };
      
      this.__proto__.sub  = (x=0,y=0)=>{
        this.x -= x;
        this.y -= y;
      };
      
      this.__proto__.mult = (m=1)=>{
        this.x *= m;
        this.y *= m;
      };
      
      this.__ptoto__.div  = (d=1)=>{
        this.x *= 1 / d;
        this.y *= 1 / d;
      };
        
    }
};

module.exports = Dot2D;