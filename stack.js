class Node{
    constructor(value){
    this.value=value
    this.next=null
    }
}
class stack{
    constructor(){
        this.top=null
    }

    push(value){
        const newNode=new Node(value)
        if(!this.top){
            this.top=newNode
            return
        }
       newNode.next=this.top
       this.top=newNode
    }
    pop(){
        if(!this.top){
            console.log("empty")
            return
        }
        this.top=this.top.next
    }
    peak(){
        return this.top?this.top:null
    }
    print() {
        let node = this.top;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
        console.log("This.top",this.top)
    }
}



const Stack=new stack()
Stack.push(1)
Stack.push(2)
Stack.push(3)
Stack.pop()
Stack.print()
console.log("this.peak",Stack.peak().value)