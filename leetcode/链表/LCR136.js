function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var deleteNode = function(head, val) {
    let pre = new ListNode()
    let cur  = head
    while(cur){
        if(cur.val === val){
            pre.next = cur.next
            break
        }else{
            cur = cur.next
            pre.next = cur
        }
    }
    return head
};