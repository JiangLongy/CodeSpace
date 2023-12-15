function TreeNode(val,left,right){
    this.val = val;
    this.left = left === undefined?null:left
    this.right = right === undefined?null:right 
}

const node = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
node.left = node2
node.right=node3
console.log(node);

function preOrder(root){
    if(root === null) return;
    console.log(root.val);
    preOrder(root.left)
    preOrder(root.right)
}
