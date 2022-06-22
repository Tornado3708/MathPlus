class Complex{
    constructor(re,im=0){this.re=re;this.im=im;
      
      this.__proto__.zet = function(r=1){
          return r*(Math.cos(this.phi())+Math.sin(this.phi()));};
      this.__proto__.abs = function(){
          return Math.sqrt(this.re*this.re+this.im*this.im);};
      this.__proto__.phi = function(){return Math.atan2(this.im,this.re);};
    }
};

module.exports = Complex;