function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var removeNthFromEnd = function(head, n) {
    let fast = head,cur = head
    let newHead = new ListNode(0,head)
    let pre = newHead
    while(n>0){
        fast = fast.next
        n--
    }
    while(fast){
        pre = cur
        cur = cur.next
        fast = fast.next
    }
    pre.next = cur.next
    return newHead.next
};