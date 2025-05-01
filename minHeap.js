class heap{
    constructor(){
        this.heap=[]
    }
    insert(value){
        this.heap.push(value)
        let index=this.heap.length-1
        let parent=Math.floor((index-1)/2)
        while(index>0){
            if(this.heap[parent]>this.heap[index]){
                [this.heap[index],this.heap[parent]]=
                [this.heap[parent],this.heap[index]]
                index=parent
                parent=Math.floor((index-1)/2)
                
            }else{
                break;
            }
        }
        
    }
    print(){
            console.log(this.heap)
        }
    
    remove(){
        let min =this.heap[0]
        this.heap[0]=this.heap.pop()
        this.update(0)
        return min
    }
    update(index){
        let length=this.heap.length
        while(true){
        let smallest =index
        let left=2*index+1
        let right=2*index+2
        if(left<length&&this.heap[smallest]>this.heap[left]){
            smallest=left
        }
        if(right<length&&this.heap[smallest]>this.heap[right]){
            smallest=right
        }
        if(smallest==index)break
        [this.heap[index],this.heap[smallest]]=
        [this.heap[smallest],this.heap[index]]
        
        index=smallest
        
      }        
    }
}
const hp=new heap()
hp.insert(10)
hp.insert(9)
hp.insert(8)
hp.print()
console.log(hp.remove())