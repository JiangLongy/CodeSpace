function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var removeDuplicateNodes = function(head) {
    let set = new Set()
    let cur = head
    let pre = null
    while(cur){
        if(set.has(cur.val)){        
            pre.next = cur.next         
        }else{
            set.add(cur.val)
            pre = cur // 更新 pre 节点为当前节点
        }
        cur = cur.next
    }
    return head
};