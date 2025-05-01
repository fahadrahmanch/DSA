class trieNode{
    constructor(){
        this.children ={}
        this.isEnd=false
    }
}
class trie{
    constructor(){
        this.root=new trieNode()

    }
    insert(word){
        console.log(this.root)
        let curr=this.root
        console.log("jh",curr)
        for(let i of word){
            if(!curr.children[i]){
                curr.children[i]=new trieNode()
            }
            curr=curr.children[i]
        }
        curr.isEnd=true
        console.log(this.root)
    }
    search(word){
        let curr=this.root
        for(let i of word){
            if(!curr.children[i]){
                return false
            }
            curr=curr.children[i]
            
        }
        return curr.isEnd
    }
    
    auto(word){
        let node=this.root
        let curr=''
        for(let i of word){
            if(!node.children[i]){
                return []
            }
        curr+=i
        node=node.children[i]
        }
        let list=[]
        this.autohelp(node,list,curr)
        return list
    }
    
    autohelp(root,list,curr){
        if(root.isEnd){
            list.push(curr)
        }
        if(!Object.keys(root.children).length){
            return 
        }
        for(let child in root.children){
            this.autohelp(root.children[child], list, curr + child) 
        }
    }
    
}
const t=new trie()
t.insert("table")
t.insert("tableindia")
t.insert("apple")
console.log(t.search("table"))
console.log(t.auto("ta"))
