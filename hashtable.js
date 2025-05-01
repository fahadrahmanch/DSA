class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    
    _hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size
    }
    
    
    _set(key,value){
        const index= this._hash(key)
        if(index){
            this.table[index]=value
        }
    }
    _get(key){
          const index= this._hash(key)
          if(index) {return this.table[index]}
          return undefined
    }
    _remove(key){
         const index= this._hash(key)
         if(index){
             this.table[index]=undefined
         }
    }
    _display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
            console.log(i,this.table[i])
            }
        }
    }
}
const table=new HashTable(9)
table._set("name",'fahad')
table._set("age",19)
table._set("place",'wandoor')
table._display()
console.log(table._get("name"))
