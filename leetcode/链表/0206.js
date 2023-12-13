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
    let left = 0,right = arr.length-1
    while(left<right){
        if(arr[left]!=arr[right]){
            return false
        }
    }
    return true
};