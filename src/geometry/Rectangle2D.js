class Rectangle2D{
    
  static area(rect){
    return rect.width * rect.height;
  };

  static diagonal(rect){
      return Math.sqrt(rect.width * rect.width + rect.height * rect.height);};
    
    constructor(x,y,width,height){
      this.x = x;
      this.y = y;
      this.width  = width;
      this.height = height;
      this.__proto__ = {};

      this.__proto__.centerX   = ()=>{return this.x + this.width/2;};
      this.__proto__.centerY   = ()=>{return this.y + this.height/2;};
      this.__proto__.oppositeX = ()=>{return this.x + this.width;};
      this.__proto__.oppositeY = ()=>{return this.y + this.height;};
    }
}
module.exports = Rectangle2D;