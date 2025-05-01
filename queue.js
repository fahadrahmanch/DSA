class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class queue{
    constructor(){
        this.front=null
        this.rear=null
    }
    enqueue(value){
        const newNode=new Node(value)
        if(!this.front){
            this.front=newNode
            this.rear=newNode
            return
        }
        this.rear.next=newNode
        this.rear=newNode
    }
    
    dequeue(){
        if(!this.front){
            console.log("empty")
            return
        }
        this.front=this.front.next
        if(!this.front){
            this.rear=null
        }
    }


    print(){
        let node=this.front
        while(node){
            console.log(node)
            node=node.next
        }
       
    }

}
const que=new queue()
que.enqueue(1)
que.enqueue(2)
que.enqueue(3)
que.dequeue()
que.print()

