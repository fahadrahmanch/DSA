class Graph{
    constructor(){
        this.graph={}
    }
    addVertex(vertex){
        if(!this.graph[vertex]){
            this.graph[vertex]=[]
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.graph[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.graph[vertex2]){
            this.addVertex(vertex2)
        }
        if(!this.graph[vertex1].includes(vertex2)){
            this.graph[vertex1].push(vertex2)
        }
        if(!this.graph[vertex2].includes(vertex1)){
            this.graph[vertex2].push(vertex1)
        }
    }
    removeVertex(vertex){
        for(let i of this.graph[vertex]){
            this.graph[i]=this.graph[i].filter((item)=>item!=vertex)
        }
        delete this.graph[vertex]
    }
    removeEdge(p1,p2){
        this.graph[p1]=this.graph[p1].filter((item)=>item!=p2)
        this.graph[p2]=this.graph[p2].filter((item)=>item!=p1)
    }
    dfs(start,visited=new Set()){
        if(!this.graph[start]) return
        let stack=[start]
        while(stack.length>0){
            let current=stack.pop()
            if(!visited.has(current)){
                console.log(current)
                visited.add(current)
            }
        stack.push(...this.graph[current].filter((item)=>!visited.has(item)))
        }
         let dis=Object.keys(this.graph)
        let items=dis.filter((item)=>!visited.has(Number(item)))
        // console.log(items)
        if(items.length>0){
           this.bfs(Number(items[0]),visited)
        }
    }
    bfs(start,visited=new Set()){
        if(!this.graph[start])return
          let queue=[start]
        while(queue.length>0){
            let current=queue.pop()
            if(!visited.has(current)){
                console.log(current)
                visited.add(current)
            }
          queue.push(...this.graph[current].filter((item)=>!visited.has(item)))
        }
        // console.log(visited)
        let dis=Object.keys(this.graph)
        let items=dis.filter((item)=>!visited.has(Number(item)))
        // console.log(items)
        if(items.length>0){
           this.bfs(Number(items[0]),visited)
        }
    }
}
const g=new Graph()
g.addEdge(1,0)
g.addEdge(1,2)
g.addEdge(2,1)
g.removeVertex(2)
g.removeEdge(1,0)
g.bfs(1)
// g.print(1,0)
