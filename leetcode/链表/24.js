function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var swapPairs = function(head) {
    let newHead = new ListNode(0,head)
    let pre = newHead
    if(!newHead.next){
        return newHead.next
    }
        let fst = head,sec
    sec = head.next
    while(sec){
        pre.next = sec
        fst.next = sec.next
        sec.next = fst
        pre = fst
        if(fst.next){
        fst = fst.next
        sec = fst.next
        }else{
            break
        }
    }
    return newHead.next
};