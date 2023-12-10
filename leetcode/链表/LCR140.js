function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var trainingPlan = function(head, cnt) {
    let arr = []
    let i = 0
    let temp = head
    while(temp){
        arr.push(temp.val)
    }
    while(i<arr.length-cnt){
        head = head.next
    }
    return head
};