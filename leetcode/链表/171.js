function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var getIntersectionNode = function(headA, headB) {
    let len1=0
    let len2 = 0
    while(headA){
        len1++
        headA = headA.next
    }
    while(headB){
        len2++
        headB =headB.next 
    }
    if(len1>len2){
        for(let i = 0;i<len1-len2;i++){
            headA = headA.next
        }
       
    }else{
        for(let i = 0;i<len2-len1;i++){
            headB = headB.next
        }
    }
    while(headA&&headB){
        if(headA === headB){
            return headA
        }
    }
    return null
};