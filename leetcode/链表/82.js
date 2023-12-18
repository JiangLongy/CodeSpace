function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var deleteDuplicates = function (head) {
    let newHead = new ListNode(0, head)
    let pre = newHead, cur = head, next = cur.next
    while (next) {
        if (cur.val === next.val && next.next != null) {
            while (cur.val === next.val && next.next != null) {
                next = next.next
            }
            pre.next = next
            cur = next
            next = cur.next
        }
        else{
            pre = cur
            cur = cur.next
            next = cur.next
        }
    }
    return newHead.next
}