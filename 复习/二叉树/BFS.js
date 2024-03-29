function bfs(root){
    let queue = [root]
    while(queue.length){
        const currentNode = queue.shift()
        console.log(currentNode.value);
        if(currentNode.children){
           currentNode.children.forEach(child=>{
            queue.push(child)
           })
        }
    }
}