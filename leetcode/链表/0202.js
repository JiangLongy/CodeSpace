function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var kthToLast = function(head, k) {
    let fast = head
    let slow = head
    while(k>0){
        fast = fast.next
        k--
    }
    while(fast){
        fast = fast.next
        slow = slow.next
    }
    return slow.val
};