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
    insert(value){
        const newNode=new Node(value)
        if(!this.root){
            this.root=newNode
            return 
        }
        let root=this.root
        while(root){
            if(value<root.value){
                if(!root.left){
                    root.left=newNode
                    return
                }
                root=root.left
            }else if(value>=root.value){
                if(!root.right){
                    root.right=newNode
                    return 
                }
                root=root.right
            }
            
        }
    }
    inOrder(root=this.root){
        if(root){
        this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
        }
    }
}
const bst=new BST()

bst.insert(1)
bst.insert(2)
bst.insert(3)
bst.inOrder()