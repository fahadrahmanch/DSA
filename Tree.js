class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class tree{
    constructor(){
        this.root=null
    }
    insert(value){
        const newNode=new Node(value)
        if(!this.root){
            this.root=newNode
            return
        }
        let node=this.root
        while(node){
            if(value<node.value){
                if(!node.left){
                    node.left=newNode
                    return
                }
                node=node.left
            }else if(value>node.value){
                if(!node.right){
                    node.right=newNode
                    return
                }
                node =node.right
            }
        }
    }
        search(value){
            let node=this.root
            while(node){
                if(node.value>value){
                    node=node.left
                }else if(node.value<value){
                    node=node.right
                }else{
                    return node.value
                }
            }
            return false
        }
        preOrder(root=this.root){
            if(root){
                console.log(root.value)
                this.preOrder(root.left)
                this.preOrder(root.right)
            }
        }
        inOrder(root=this.root){
            if(root){
                this.inOrder(root.left)
                console.log(root.value)
                this.inOrder(root.right)
            }
        }
        postOrder(root=this.root){
            if(root){
                this.postOrder(root.left)
                this.postOrder(root.right)
                console.log(root.value)
            }
        }
        levelOrder(root=this.root){
            let q=[]
            q.push(root)
            while(q.length>0){
                let curr=q.shift()
                console.log(curr.value)
                if(curr.left){
                q.push(curr.left)
                }
                if(curr.right){
                q.push(curr.right)
                }
            }
        }
        min(root=this.root){
            if(!root.left){
                return root.value
            }
            return this.min(root.left)
            
        }
        max(root=this.root){
            if(!root.right){
                return root.value
            }
            return this.max(root.right)
        }
        height(node){
            if(node==null){
                return 0
            }
            let left=this.height(node.left)
            let right=this.height(node.right)
            return Math.max(left,right)+1
        }
        depth(target,root=this.root,depth=0){
              if (root === null) {
               return "no value";
             }
            if(target==root.value){
                console.log(root.value)
                return depth
            }
            if(target<root.value){
                depth++
                return this.depth(target,root.left,depth)
            }
            else if(target>root.value){
                depth++
                return this.depth(target,root.right,depth)
            }
        }
        
        degree(value,root=this.root){
            if(root==null)return -1
            if(value==root.value){
                let degree=0
                if(root.left)degree++
                if(root.right)degree++
                return degree
            }
            if(value<root.value)return this.degree(value,root.left) 
            if(value>root.value)return this.degree(value,root.right) 
        }
        isComplete(root=this.root){
            if(!root) return true
            let s=[root]
            let end=false
            while(s.length>0){
                let curr=s.shift()
                if(curr==null){
                    end=true
                }else{
                    if(end)return false
                    s.push(curr.left)
                    s.push(curr.right)
                }
            }
            return true
        }
        isFull(root=this.root){
            if(!root) return true
            if(root.left==null&&root.right==null){
                return true
            }
            if(root.left&&root.right){
                return this.isFull(root.left)&&this.isFull(root.right)
            }
            return false
        }
        findClosest(target){
            if (!this.root) return null; // handle empty tree
            let current=this.root
            let close=current.value
            while(current){
                console.log('s')
                if(Math.abs(current.value-target)<Math.abs(close-target)){
                    close =current.value
                }
                if(target<current.value){
                    current=current.left
                }else if(target>current.value){
                    current=current.right
                }else{
                    break
                }
            }
            return close
        }
        
}

const n= new tree()
n.insert(10)
n.insert(2)
n.insert(11)
n.insert(12)
// n.insert(4)
n.preOrder()
console.log("============")
n.inOrder()
console.log("============")
n.postOrder()
console.log("============")
n.levelOrder()
console.log("============")
console.log("height",n.height(n.root))
console.log("min value",n.min())
console.log("max value",n.max())
console.log("depth of a node",n.depth(1))
console.log("degree of a node",n.degree(10))
console.log("is it complete tree : ",n.isComplete())
console.log("is it fullTree':",n.isFull())
console.log("closest value",n.findClosest(13))
console.log("seach",n.search(9))
