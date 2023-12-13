function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var swapPairs = function(head) {
    let fst = head
    let sec = head.next
    let newHead = new ListNode(0,head)
    let pre = newHead
    while(sec){
        pre.next = sec
        fst.next = sec.next
        sec.next = fst
        let temp = sec
        sec = fst
        fst = sec
        pre = sec
        fst = fst.next.next
        sec = sec.next.next
    }
    return head
};