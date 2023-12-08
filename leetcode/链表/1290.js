function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var getDecimalValue = function(head) {
    let arr = []
    let ans = 0
    while(head){
        ans = ans*2+head.val
        head = head.next
    }

    return ans
};