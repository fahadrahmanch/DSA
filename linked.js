// class Node{
//     constructor(value){
//     this.value=value
//     this.next=null
//     }
// }
// class isLinked{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
//     append(arr){
//     arr.forEach((value)=>{
//         const newNode= new Node(value)
//         if(!this.head){
//             this.head=newNode
//             this.tail=newNode
//             return
//         }
//         this.tail.next=newNode
//         this.tail=newNode
     
//     })
   
//     }
//     print(){
//         let current=this.head
//         while(current){
//             console.log(current.value);
//             current=current.next
//         }
//     }
// }

// const list= new isLinked()
// list.append([1,2,3,4,5])
// list.print()




// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class linked{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }

//     append(value){
//     const newNode= new Node(value)
//     if(!this.head){
//         this.head=newNode
//         this.tail=newNode
//         return
//     }
//     this.tail.next=newNode
//     this.tail=newNode
//     }
//     prepend(value){
//         const newNode=new Node(value)
//         if(!this.head){
//             this.head=newNode
//             this.tail=newNode
//             return
//         }
//         newNode.next=this.head
//         this.head=newNode
//     }
//     print(){
//         let current=this.head
//         while(current){
//             console.log(current.value)
//             current=current.next
//         }
//     }
// }

// const list = new linked()
// list.append(1)
// list.append(2)
// list.append(3)
// list.prepend(5)
// list.prepend(6)

// list.print()



class Node{
constructor(value){
    this.value=value
    this.next=null
}

}
class linked{
    constructor(){
        this.head=null
        this.tail=null
    }
    
    append(value){
        const newNode=new Node(value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
            return 
        }
        this.tail.next=newNode
        this.tail=newNode
    }
    delete(value){
        if(!this.head) return
        if(this.head.value==value){
            this.head=this.head.next
            if(!this.head) this.tail=null
            return

        }
        let current=this.head
        while(current.next&&current.next.value!=value){
            current=current.next
        }
        if(!current.next)  return
        current.next=current.next.next
        if(!current.next){
            console.log(true)
            this.tail=current
        }
        
    }
    afterInsert(invalue,value){
   if(!this.head) return
   const newNode=new Node(invalue)
   if(this.head.value===value){
    newNode.next=this.head.next
    this.head.next=newNode
    if(!newNode.next) this.tail=newNode
    return
   }
   let current=this.head
   while(current.next&&current.next.value!=value){
    current=current.next
   }
   if(!current.next)return
   current=current.next
   newNode.next=current.next
   current.next=newNode
   console.log(newNode.next)
   if(!newNode.next){
    this.tail=newNode
   }
    }
    print(){
        let current=this.head
        while(current){
            console.log(current.value)
            current=current.next
        } 
        console.log(this.tail)
        
    }
    beforeInsert(value,indexvalue){
    if(!this.head)return
    const newNode= new Node(value)
    if(this.head.value==indexvalue){
        newNode.next=this.head
        this.head=newNode
        return
    }
    let current=this.head
    while(current.next&&current.next.value!=indexvalue){
        current=current.next
    }
    if(!current.next) return 
    newNode.next=current.next
    current.next=newNode
    }
     


    dup() {
        if(!this.head) return
        let current=this.head
        while(current.next){
       if(current.value==current.next.value){
        current.next=current.next.next
       }else{
        current=current.next
       }
       
        }
    }



}
const list =new linked()
list.append(1)                    
list.append(2)                    
list.append(2)                    
list.append(3)    
list.append(3)    
list.append(4)   
list.append(4)   
list.append(4)   
list.append(5)   
list.append(5)   
list.dup() 
// list.delete(4)    
// list.afterInsert(5,1)      
// list.beforeInsert(5421,4)      
list.print() 