//binary search tree
class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BST{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        const newNode=new Node(value)
        if(!this.root){
            this.root=newNode
            return 
        }
        let current=this.root
        while(true){
        if(value<current.value){
            if(!current.left){
                current.left=newNode
                return
            }
            current=current.left
        }else{
            if(!current.right){
                current.right=newNode
                return 
            }
            current=current.right
        }
        }
    }
    search(value){
       let current=this.root
       while(current){
           if(value<current.value){
               current=current.left
           }else if(value>current.value){
               current=current.right
           }else{
               return true
           }
       }
       return false
    }
    leafCount(root=this.root){
        if(!root)return 0
        if(!root.left&&!root.right){
            return 1
        }
        return this.leafCount(root.left)+this.leafCount(root.right)
    }

delete(value){
    this.root=this.deletehelp(this.root,value)
    return this.root
}
deletehelp(root,value){
    if(!root)return null
    if(value<root.value){
        root.left=this.deletehelp(root.left,value)
    }else if(value>root.value){
        root.right=this.deletehelp(root.right,value)
    }else{
        if(!root.left&&!root.right)return null
        let min=this.min(root.right)
        root.value=min.value
       root.right= this.deletehelp(root.right,min.value)
        
    }
    return root
}
 min(root=this.root){
     if(!root)return null
     if(!root.left){
         return root
     }
     return this.min(root.left)
 }   
 
 second(root){
     if(!root&&!root.left&&!root.right)return null
     let curr=root
     let parent=null
     while(curr.right){
         parent=curr
         curr=curr.right
     }
     if(curr.left){
         curr=curr.left
         while(curr.right){
             curr=curr.right
         }
         return curr
     }
     return parent.value
 }
 secondsmall(root){
     if(!root&&!root.left&&!root.right)return null
     let curr=root
     let parent=null
     while(curr.left){
         parent=curr
         curr=curr.left
     }
     if(curr.right){
         curr=curr.right
         while(curr.left){
             curr=curr.left
         }
         return curr
     }
     return parent.value
 }
 kth(root,k){
     if(!root||this.count>=k){
         return
     }
     this.kth(root.right)
     this.count++
     if(this.count==k){
         this.result=root.value
         return
     }
     this.kth(root.left)
 }
 K(k){
     this.count=0
     this.result=null
     this.kth(this.root,k)
     return this.result
 }
 
}
const bst=new BST()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log("kth large",bst.K(2))
console.log("second largest",bst.second(bst.root))
console.log("second small",bst.secondsmall(bst.root))
console.log(bst.root)
console.log('============')
console.log('============')
console.log(bst.delete(3))