class heap{
    constructor(){
        this.heap=[]
    }
    insert(value){
        this.heap.push(value)
        let index=this.heap.length-1
        let parent=Math.floor((index-1)/2)
        while(index>0){
            if(this.heap[parent]<this.heap[index]){
                [this.heap[parent],this.heap[index]]=
                [this.heap[index],this.heap[parent]]
                index=parent
                parent=Math.floor((index-1)/2)
            }else{
                break
            }
        }
    }
    remove(){
        if(this.heap.length==0) return
        if(this.heap.length==1)return this.heap.pop()
        console.log("help")
        let min =this.heap[0]
        this.heap[0]=this.heap.pop()
        this.update(0)
        return min 
    }
    update(index){
     let length=this.heap.length
     
            let small=index
            let left=2*index+1
            let right=2*index+2
            if(left<length&&this.heap[small]<this.heap[left]){
                small=left
            }
            if(right<length&&this.heap[small]<this.heap[right]){
                small=right
            }
            if(index!=small){
            [this.heap[small],this.heap[index]]=
            [this.heap[index],this.heap[small]]
            this.update(small)
            }
        
    }
    heapSort(){
        let temp=[...this.heap]
        let arr=[]
        while(this.heap.length>0){
            // console.log("help")
            arr.push(this.remove())
        }
        console.log("sfds")
        this.heap=[...temp]
        return arr
    }
    print(){
        console.log(this.heap)
    }
}
const h= new heap()
h.insert(9)
h.insert(9000)
h.insert(900)
h.insert(1)
h.insert(90)
// h.remove()
console.log(h.heapSort())
h.print()