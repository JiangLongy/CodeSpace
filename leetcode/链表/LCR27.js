function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var isPalindrome = function(head) {
    let arr = []
    while(head){
        arr.push(head.val)
        head = head.next
    }
    for(let i = arr.length-1,j=0;j<i;j++,i--){
        if(arr[i] != arr[j]){
            return false
        }
    }
    return true
};