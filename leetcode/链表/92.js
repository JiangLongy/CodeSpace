function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var reverseBetween = function(head, left, right) {
    let fast = head
    let slow = head
    let len = right-left
    let pre = null
    while(len){
        fast = fast.next
        len--
    }
    while(left){
        pre = slow
        slow = slow.next
        fast = fast.next
        left--
    }
    let cur = slow
    let next = fast.next
    let pre1 = null
    fast.next = null
    while(cur ){
        const next = cur.next
        cur.next = pre1
        pre1 = cur;
        cur = next;
    }
    pre.next = pre1
    cur.next = next
    return head
};