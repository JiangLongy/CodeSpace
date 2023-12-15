function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var rotateRight = function(head, k) {
    if(!head || !head.next || !k) return head;
    let cur = head
    let size = 1
    while(cur.next){
        size++
        cur = cur.next
    }
    cur.next = head
    let temp = cur
    let move = k%size
    while(move+1){
        cur = cur.next
        move--
    }
    temp.next = null
    return cur

};