class Matrix{
    
    static transpose = (array) =>{//toDo
        let output = [];
        let rows = array.length;
        let cols = array[0].length;
        for(let x = 0;x < cols;x++){
            output[x] = [];
            for(let y = 0;y < rows;y++){
                output[x][y] = array[y][x];
            }
        }
        return output;
    };
    
    constructor(array){
        this.__proto__.length = 0;
        
        for(let x = 0;x < array.length;x++){
            this[x] = [];
            for(let y = 0;y < array[0].length;y++){
                this[x][y] = array[x][y];
            }
            this.__proto__.length = x+1;
        }
        
        this.__proto__.transpose = () =>{
            
            let temp = [];
            let rows = this.length;
            let cols = this[0].length;
            
            for(let x = 0;x < rows;x++){
                temp[x] = [];
                for(let y = 0;y < cols;y++){
                    temp[x][y] = this[x][y];
                }
            }
            for(let i = 0;i < this.length;i++){ delete this[i];}
            
            for(let x = 0;x < cols;x++){
                this[x] = [];
                for(let y = 0;y < rows;y++){
                    this[x][y] = temp[y][x];
                }
            }
            this.__proto__.length = cols;
        };
    }
};

module.exports = Matrix;