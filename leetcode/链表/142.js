function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var trainningPlan = function(l1, l2) {
    let list = new ListNode()
    let cur = list
    while(l1&&l2){
        if(l1.val<l2.val){
            cur.next = l1
            l1 = l1.next
            cur = cur.next
        }else{
            cur.next = l2
            l2 = l2.next
            cur = cur.next
        }
    }
    cur.next = l1?l1:l2
    return list.next
};