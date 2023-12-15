function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var levelOrder = function (root) {
    let res = []
    let queue = []
    queue.push(root)
    while(queue.length){
        const top = queue[0]
        if(top.left){
            queue.push(top.left)
        }
        if(top.right){
            queue.push(top.right)
        }
        res.push(queue.shift())
    }
    return res
};