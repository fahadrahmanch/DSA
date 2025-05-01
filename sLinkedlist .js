// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class sLinkedlist{
//     constructor(){
//         this.head=null
//     }
//     append(value){
//         const newNode=new Node(value)
//         if(!this.head){
//             this.head=newNode
//             return
//         }
//         let current=this.head
//         while(current.next){
//             current=current.next
//         }
//         current.next=newNode
//     }
//     print(){
//         let current=this.head
//         while(current){
//             console.log(current.value)
//             current=current.next
//         }
//     }

//     d

// }

// const list=new sLinkedlist()
// list.append(10)
// list.append(20)
// list.append(30)

// console.log("linked list")
// list.print()

// class Node{
//     constructor(value){
//     this.value=value
//     this.next=null
//     }
// }

// class sLinkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
//     append(value){
//         const newNode= new Node(value)
//         if(!this.head){
//             this.head=newNode
//             this.tail=newNode
//             return
//         }
//         let current=this.head
//         while(current.next){
//             current=current.next
//         }
//         current.next=newNode;
//         this.tail=newNode

//     }
//     print(){
//         let current=this.head
//         console.log("taissssssssssssl",this.tail)
//         console.log("linked list")
//         while(current){
//             console.log(current.value)

//             current=current.next
//         }
//     }
//     deleteElement(value){
//         this.value
//     if(!this.head){
//         console.log("linked list is empty")
//         return
//     }
//     if(this.head.value===value){
//         console.log("head delete")
//        this.head=this.head.next
//     if(!this.head){
//         this.tail=null
//         return
//     }
//     }
//     let current=this.head
//     while(current.next&&current.next.value!==value){
//         current=current.next
//     }
//     if(!current.next) return

//     if(current.next===this.tail){
//         console.log("tail delete")
//         this.tail=current

//     }
// current.next=current.next.next
// console.log("now",current.next)
//     }
// }
// let list = new sLinkedlist()
// list.append(10)
// list.append(20)
// list.append(30)
// list.print()
// list.deleteElement(30)
// console.log("after delete an element")
// list.print()

// class Node{
//     constructor(value){
//     this.value=value
//     this.next=null
//     }
// }

// class sLinkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
//     append(value){
//         const newNode=new Node(value)
//         if(!this.head){
//             this.head=newNode
//             this.tail=newNode
//             return
//         }
//         let current=this.head
//         while(current.next){
//             current=current.next
//         }
//         current.next=newNode
//         this.tail=newNode

//     }
//     print(){
//         let current=this.head
//         while(current){
//             console.log(current.value)
//             current=current.next
//         }

//     }
//     deleteElement(value){
//      let current=this.head
//      console.log(current)
//      if(current.value===value){
//      console.log(true)
//      this.head=current.next
//      if(!this.head){
//         this.head=null
//         this.tail=null
//      }
//      return
//      }

//      while(current&&current.next.value!=value){
//         current=current.next
//      }
//      console.log("current.next",current.next)
//      if(current.next==this.tail){
//         this.tail=current
//      }
//      console.log("this.tail",this.tail)
//      current.next=current.next.next

//     }

//     insertAfter(nextTo,data){
//     const newNode=new Node(data)
//     let temp =this.head
//     if(temp&&temp.value!=nextTo){
//         temp=temp.next
//     }
//     if(temp==null){
//         console.log("not found")
//         return
//     }
//     if(temp==this.tail){
//         this.tail.next=newNode
//         this.tail=newNode

//     }
//     newNode.next=temp.next
//     temp.next=newNode
//     }

// }
// const list = new sLinkedlist()
// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.append(50)
// list.insertAfter(50,90)
// list.deleteElement(50)
// list.print()

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }
// class dLinkedlist {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   append(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//       return;
//     }

//     this.tail.next = newNode;
//     newNode.prev = this.tail;
//     this.tail = newNode;
//   }

//   delete(value) {
//     if (!this.head) {
//       return;
//     }
//     if (this.head.value === value) {
//       this.head = this.head.next;
//       if (this.head) {
//         this.head.prev = null;
//       } else {
//         this.tail = null;
//       }
//       return;
//     }
//     let current = this.head;
//     while (current.next != null && current.next.value != value) {
//       current = current.next;
//     }
//     if (this.tail == current.next) {
//       this.tail = this.tail.prev;
//       this.tail.next = null;
//       return;
//     }
//     if (!current.next) return;
//     current.next = current.next.next;
//   }

//   beforeInsert(prevTo, value) {
//     if (!this.head) return;
//     const newNode = new Node(value);
//     if (this.head.value == prevTo) {
//       this.head.prev = newNode.node;
//       newNode.next = this.head;
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next && current.next.value != prevTo) {
//       current = current.next;
//     }
//     if (!current.next) return;

//     if (current.next === this.tail) {
//       console.log(true);
//       let temp = this.tail.prev;
//       temp.next = newNode;
//       newNode.prev = temp;
//       newNode.next = this.tail;
//       this.tail.prev = newNode;
//       return;
//     }
//     current = current.next;
//     newNode.next = current;
//     newNode.prev = current.prev;
//     current.prev.next = newNode;
//     current.prev = newNode;
//   }

//   afterInsert(nextTo, value) {
//     if (!this.head) return;
//     const newNode = new Node(value);
//     let current = this.head;
//     while (current && current.value != nextTo) {
//       current = current.next;
//     }
//     if (!current) return;
//     if (current === this.tail) {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//       return;
//     }

//     newNode.next = current.next;
//     newNode.prev = current;
//     current.next.prev = newNode;
//     current.next = newNode;
//   }

//   print() {
//     let current = this.head;
//     while (current) {
//       console.log(current.value);
//       current = current.next;
//     }
//   }
//   prevprint() {
//     let current = this.tail;
//     console.log("prev");
//     while (current) {
//       console.log(current.value);
//       current = current.prev;
//     }
//   }
// }

// const list = new dLinkedlist();
// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);
// list.append(50);
// list.delete();
// list.delete();

// // list.prevprint();
// // list.beforeInsert(30,9)
// list.afterInsert(30, 9);
// list.print();

// class Node{
//     constructor(value){
//     this.value=value
//     this.next=null
//     }
// }

// class sLinkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
//     append(value){
//         const newNode=new Node(value)
//         if(!this.head){
//             this.head=newNode
//             this.tail=newNode
//             return
//         }
//         let current=this.head
//         while(current.next){
//             current=current.next
//         }
//         current.next=newNode
//         this.tail=newNode

//     }
//     print(){
//         let current=this.head
//         while(current){
//             console.log(current.value)
//             current=current.next
//         }

//     }
//     deleteElement(value){
//      let current=this.head
//      console.log(current)
//      if(current.value===value){
//      console.log(true)
//      this.head=current.next
//      if(!this.head){
//         this.head=null
//         this.tail=null
//      }
//      return
//      }

//      while(current&&current.next.value!=value){
//         current=current.next
//      }
//      console.log("current.next",current.next)
//      if(current.next==this.tail){
//         this.tail=current
//      }
//      console.log("this.tail",this.tail)
//      current.next=current.next.next

//     }

//     insertAfter(nextTo,data){
//     const newNode=new Node(data)
//     let temp =this.head
//     if(temp&&temp.value!=nextTo){
//         temp=temp.next
//     }
//     if(temp==null){
//         console.log("not found")
//         return
//     }
//     if(temp==this.tail){
//         this.tail.next=newNode
//         this.tail=newNode

//     }
//     newNode.next=temp.next
//     temp.next=newNode
//     }

// }
// const list = new dLinkedlisLinkedlist()
// list.append(10)

// list.print()




























class Node{
    constructor(value){
    this.value=value
    this.next=null
    }
}

class sLinkedlist{
    constructor(){
        this.head=null
        this.tail=null
    }
    append(value){
        const newNode= new Node(value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
            return
        }
        let current=this.head
        while(current.next){
            current=current.next
        }
        current.next=newNode;
        this.tail=newNode

    }
    print(){
        let current=this.head
       
        while(current){
            console.log(current.value)

            current=current.next
        }
        console.log("this,tail",this.tail)
    }
    deleteElement(value){
        this.value
    if(!this.head){
        return
    }
    if(this.head.value===value){
       this.head=this.head.next
    if(!this.head){
        this.tail=null
        return
    }
    }
    let current=this.head
    while(current.next&&current.next.value!==value){
        current=current.next
    }
    if(!current.next) return

    if(current.next===this.tail){
        this.tail=current

    }
    current.next=current.next.next
    }
  
     removeDuplicate(){ 
     let current=this.head
     while(current!=null){
        let next=current.next
        while(next!=null&&next.value==current.value){
            next=next.next
        }
        current.next=next
        if(next==null){
            this.tail=current
            this.next=null
        }
        current=next
     }
    }  
}
let list = new sLinkedlist()
list.append(6)
list.append(10)
list.append(5)
list.append(5)
list.append(5)
list.append(8)
list.append(8)
list.removeDuplicate()
list.print()


// list.deleteElement(30)
