function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var deleteNode = function(node) {
    let next = node.next
    node.var = next.var
    node.next = next.next
};