function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var trainningPlan = function(head) {
    let newList = new ListNode()
    let cur = head
    while(head){
        cur.next = head
        head=head.next
        cur = cur.next
    }
    return newList
};