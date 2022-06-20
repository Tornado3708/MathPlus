module.exports = class Matrix{
    
    static transpose = (array) =>{//toDo
    };
    
    constructor(array){
        for(let x = 0;x < array.length;x++){
            this[x] = array[x];
            for(let y = 0;y < array[0].length;y++){
                this[x][y] = array[x][y];
            }
            this.__proto__.length = x+1;
        }
        
        this.__proto__.transpose = () =>{
            
            let temp = [];
            let rows = this.length;
            let cols = this[0].length;
            
            for(let y = 0;y < rows;y++){
                temp[y] = [];
                for(let x = 0;x < cols;x++){
                    temp[y][x] = this[y][x];
                }
            }
            
            for(let y = 0;y < rows;y++){
                delete this[y];
                this.__proto__.length = 0;
            }
            
            for(let y = 0;y < cols;y++){
                this[y] = [];
                for(let x = 0;x < rows;x++){
                    this[y][x] = temp[x][y];
                }
            }
            this.__proto__.length = temp[0].length;
        };
    }
};