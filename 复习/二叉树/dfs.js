function dfs(root){
    console.log(node.value)
    for(let child of node){
        dfs(child)
    }
}