function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var reverseBookList = function (head) {
    if(!head) return []
    let arr = [];
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    return arr.reverse()
};