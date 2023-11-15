# 块级
1.默认占据一整行
2.可以设置宽高
3.margin : 0 auto 控制块级元素居中
# 行内块
1.可以同行显示
2.可以设置宽高
# 行内
1.可以同行显示
2.不可以设置宽高

# 浮动
1.脱离文档流，不占据位置
2.文字环绕
3.让块级元素同行显示
4.让行内元素可以设置宽高
5.可以使用margin 但是不能使用margin：0 auto

# 清除浮动
1.给父容器设置高度
2.在最后一个浮动之后添加新的元素，在新元素上做清除浮动 clear: left
3.在父容器伪元素after上做清除浮动
4.在下方被浮动影响的容器上面做清除浮动

# BFC容器 Block Formatting Context 块级格式化上下文

- 哪些属性可以创建BFC：

1.float:left||right
2.position:absolute||fixed
3.display:inline-block 不会脱离文档流 
4.display:table-cell....
5.overflow:hidden||auto||overly:scroll
6.弹性盒子(display:flex || inline-flex)
 
- BFC的特点：

1.BFC容器在计算高度时，会将浮动元素的高度也计算在内
2.用来解决内外margin重叠问题
