function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var addTwoNumbers = function (l1, l2) {
let str1 = ''
let str2=''
while(l1){
    str1+=l1.val
    l1 = l1.next
}
while(l2){
    str2+=l2.val
    l2 = l2.next
}

};