class Node{
    constructor(key,value){
        this.key=key
        this.value=value
        this.next=null
    }
}
class hashTable{
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
        const index=this._hash(key)
        if(!this.table[index]){
            this.table[index]=new Node(key ,value)
        }
        let current=this.table[index]
        while(current){
            if(current.key==key){
                current.value=value
                return
            }
            if(!current.next) break
            current=current.next
        }
        current.next=new Node(key,value)
    }
    _get(key){
        const index= this._hash(key)
        let current=this.table[index]
        while(current){
            if(current.key===key){
                return current.value
            }
            current=current.next
        }
        return undefined
    }
    _remove(key){
        const index=this._hash(key)
        let current=this.table[index]
        if(current.key===key){
            this.table[index]=current.next
            return
        }
        let prev=null
        while(current){
            if(current.key==key){
                prev.next=current.next
                return
            }
            prev=current
            current=current.next
        }
    }
    _display(){
        for(let i=0;i<this.table.length;i++){
            let current=this.table[i]
            let chain=''
            while(current){
                
                chain+=`${current.key} :${current.value} -> `
                current=current.next
            }
            if(chain){
console.log(`${i}: ${chain} null`);             }
        }
    }
}


const table=new hashTable(10)
table._set("name",'fahad')
table._set("mane",'rahman')
table._set("age",'18')
table._set("placee",'wandoor')
table._remove("placee")
table._display()
// console.log(table._get('name'))















