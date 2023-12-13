function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var getIntersectionNode = function(headA, headB) {
    let lenA = 0,lenB = 0
    let curA = headA,curB = headB
    while(curA||curB){
        if(curA){
            lenA++
            curA = curA.next
        }
        if(curB){
            lenB++
            curB = curB.next
        }
    }
    if(lenA>lenB){
        for(let i = 0;i<lenA-lenB;i++){
            headA = headA.next
        }
    }
    else{
        for(let i = 0;i<lenB-lenA;i++){
            headB = headB.next
        }
    }
    while(headA && headB){
        if(headA === headB){
            return headA
        }
        headA = headA.next
        headB = headB.next
    }
    return null
};