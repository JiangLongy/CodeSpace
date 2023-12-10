let arr = [1,2,2,2,3,4,45,3]//有序列表线性结构
let res = {
    val:1,//数据域
    next:{//指针域
        val:2,
        next:{
        //... 
        }
    }
}
function ListNode(val){
    this.val = val;
    this.next = null;
}  
const node = new ListNode(1)
node.next = new ListNode(2)
let temp = node.next
node.next = new ListNode(4)
node.next.next = temp
