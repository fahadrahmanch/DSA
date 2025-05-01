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
    // DFS
    preOrder(root=this.root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    // inOrder
    inOrder(root =this.root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
     
    //postOrder
     postOrder(root=this.root){
         if(root){
             this.postOrder(root.left)
             this.postOrder(root.right)
             console.log(root.value)
         }
     }
     
     //BFS
        levelOrder(root=this.root){
            if(root){
                const quene=[]
                quene.push(this.root)
                while(quene.length){
                    let curr=quene.shift()
                    console.log(curr.value)
                    if(curr.left){
                        quene.push(curr.left)
                    } 
                    if(curr.right){
                        quene.push(curr.right)
                    }
                    
                }
            }
        }
        // min node 
         min(root=this.root){
             if(!root.left){
                 return root.value
             }else{
                 return this.min(root.left)
             }
         }
         max(root=this.root){
             if(!root.right){
                 return root.value
             }else{
                
                 return this.max(root.right)
             }
         }
         
         delete(value){
             this.root=this.deleteNode(this.root,value)
         }
         deleteNode(root,value){
             if(root==null){
                 return root
             }
             if(value<root.value){
                 root.left=this.deleteNode(root.left,value)
             }else if(value>root.value){
                 root.right=this.deleteNode(root.right,value)
             }else{
                 if(!root.left&&!root.right){
                     return null
                 }
                 if(!root.left){
                     return root.right
                 }else if(!root.right){
                     return root.left
                 }
                 root.value=this.min(root.right)
                 root.right=this.deleteNode(root.right,root.value)
             }
             return root
         }
         hight(node){
          if(node==null){
            return 0
          }
          let left=this.hight(node.left)
          let right=this.hight(node.right)
          return Math.max(left,right)+1
         }
         depth(target,node=this.root,depth=0){
            console.log(node)
            if(!node||node.value==null){
                return -1
            }
            if(node.value===target){
                return depth
            }
            let left=this.depth(target,node.left,depth+1)
            if(left!=-1){
                return left
            }
            return this.depth(target,node.right,depth+1)
         }
         degree(target,node=this.root){
            if(!node||!node.value)return -1
            let degree=0
         if(target===node.value){
            console.log(node.left)
            console.log(node.right)
           if(node.left)degree++
           if(node.right)degree++
           return degree
         }
         let left=this.degree(target,node.left)
         if(left!=-1){
            return left
         }
         return this.degree(target,node.right)
         }

         isComplete(root=this.root){
            if(!root) return true
            let quene=[root]
            console.log("quene",quene.length)
            let end=false
            while(quene.length>0){
                let node=quene.shift()
                console.log('length',quene.length)
                if(node==null){
                 end=true
                }else{
                    if(end) return false
                    quene.push(node.left)
                    quene.push(node.right)
                }
            }
            return true
         }
         isFull(root=this.root){
             if(!root) return true
             if(root.left==null&&root.right==null){
                 return true
             }
             if(root.left!=null&&root.right!=null){
                 return this.isFull(root.left)&&this.isFull(root.right)
             }
             return false
          } 
        
}
const bst=new BST()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
// bst.delete(10)
bst.degree(10)
bst.levelOrder()
console.log("is tree is complete",bst.isComplete())
console.log("depth",bst.depth(5))
console.log("hiehgt",bst.hight(bst.root))
console.log("degree",bst.degree(15))
console.log("min value",bst.min())
console.log("max value",bst.max())
console.log(bst.search(33)) 
console.log("tree is empty ?",bst.isEmpty())