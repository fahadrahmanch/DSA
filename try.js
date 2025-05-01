class graph{
    constructor(){
        this.graph={}
    }
    addVertex(vertex){
        if(!this.graph[vertex]){
            this.graph[vertex]=[]
        }
    }
    addEdge(p1,p2){
        if(!this.graph[p1]){
            this.addVertex(p1)
        }
        if(!this.graph[p2]){
            this.addVertex(p2)
        }
        if(!this.graph[p1].includes(p2)){
            this.graph[p1].push(p2)
        }
        if(!this.graph[p2].includes(p1)){
            this.graph[p2].push(p1)
        }
    }
    removeVertex(vertex){
        if(!this.graph[vertex])return
        for(let i of this.graph[vertex]){
            this.graph[i]=this.graph[i].filter((item)=>item!=vertex)
        }
        delete this.graph[vertex]
    }
    removeEdge(p1,p2){
        this.graph[p1]=this.graph[p1].filter((item)=>item!=p2)
        this.graph[p2]=this.graph[p2].filter((item)=>item!=p1)
    }
    // bfs
    bfs(start,visited=new Set()){
        let stack=[start]
        while(stack.length>0){
            let curr=stack.shift()
            if(!visited.has(curr)){
                console.log(curr)
                visited.add(curr)
                if(this.graph[curr]){
                for(let i of this.graph[curr]){
                    if(!visited.has(i)){
                        stack.push(i)
                    }
                }
            }
            }
        }
    }
}
const b=new graph()
b.addEdge(12,1)
b.addEdge(2,3)
b.addEdge(7,1)
b.bfs(1)