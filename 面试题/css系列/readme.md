# 说说你对css盒模型的理解
1. 是什么？

浏览器在页面布局时，将所有的元素表示为一个个矩形盒子，每一个盒子包含四个部分：content、padding、border、margin。

2. 标准盒模型
盒子总宽度: width + padding + border + margin

3. 怪异盒模型(IE)
盒子总宽度：width+padding

设置 box-sizing: border-box; 此时以IE盒模型来加载容器

# css中的选择器有哪些？说说优先级

1. id选择器
2. 类选择器
3. 标签选择器
4. 后代选择器
5. 子级选择器
6. 相邻兄弟选择器
7. 群组选择器

8. 属性选择器
9. 伪元素选择器
10. 伪类选择器

!important > 内联 > id选择器 > 类名选择器 > 标签选择器 

# 说说css中的单位有哪些?
1. px : 像素单位，屏幕上的发光点
2. rem ：相对单位，相对于根字体大小
3. em ：相对单位，用在字体上会继承父容器的字体大小，用在他处，相对于当前容器自己的字体大小来定
4. vw/vh：相对单位，相对于视口宽度/高度
5. %：相对单位，相对于父容器的宽度/高度

# 说说设备像素，css像素，设备独立像素，dpr，ppi之间的区别
1. pc端 1px == 1个物理像素
2. 页面缩放比为1：1时 1px == 1个物理像素

设备像素 === 物理像素
css像素 === 1px
设备独立像素 === 分辨率
dpr(设备像素比) === 设备像素 / 设备独立像素
ppi === 像素的密度


# css中有哪些方式可以隐藏页面元素？区别是什么？

1. display:none;  脱离文档流 无法响应事件   回流重绘
2. visibility:hidden; 占据文档流 无法响应事件 重绘
3. position:absolute;   脱离文档流 无法响应事件 回流重绘
4. opacity:0;   占据文档流 可以响应事件 重绘 || 不重绘 动画不会重绘
5. clip-path:circle(0%) 占据文档流 无法响应事件  重绘

# 谈谈你对BFC的理解？
- 是什么？
块级格式化上下文，是页面中一个渲染区域，有一套属于自己的渲染规则

- 渲染规则
1. BFC容器在计算高度时，浮动元素的高度也会计算在内
2. BFC容器内的子元素的margin-top不会和BFC这个父容器发生重叠
3. 从上往下，从左往右的布局排列

- 触发条件
    1. overflow: 不为visible;
    2. float
    3. display: inline-block || inline-XXX || flex || table-XXX || grid,
    4. position: absolute || fixed

- 应用
  清除浮动

# 水平垂直居中的方式有哪些？

1. position: absolute; + translate || margin -XXXpx;(margin已知宽高)
2. flex
3. grid
4. table: text-align + vertical-align （子容器不能是块级元素）


# 三栏布局怎么实现？
- 两栏布局
1. flex
2. grid
3. float + margin-left

- 三栏布局
1. flex
2. grid
3. 左右先加载，内容后加载：float+margin

4. 圣杯布局：float + margin负值 + position：relative

5. 双飞翼布局： float + margin负值

# 说说flex Box
- 是什么
  是一种布局方式，可以简便完整响应式的实现页面布局，容器中默认存在两条轴，主轴，交叉轴，默认x轴为主轴，可以用flex-direction来改变主轴方向

- 特征
1. 可以控制子元素在主轴上的对齐方式
2. 可以控制子元素在交叉轴上的对齐方式
3. 可以控制子元素缩放比例 排列方式

- 应用场景
1. 多栏布局
2. 居中

##  什么是响应式？
- 是什么
跟随用户设备尺寸的变化，页面实现自动的适配

- 实现方案

1. flex（适用于某个容器内的响应式）
2. 百分比(适用于外层大容器)
3. rem + 媒体查询 (可用于任何地方)----虽然也要写多个媒体查询，但是每个媒体查询中的代码量少
4. 媒体查询 (可用于任何地方)---代码量大
5. vw/vh (适用于外层大容器) ---- 相对width大小

# 视差滚动效果任何实现

- 是什么
多层背景以不同的速度进行移动，实现视觉上的落差

- 实现

1. background-attachment: fixed;
2. perspective + translateZ

# css画一个三角形

1. 

# 如何显示一个小于10px的文字
1. zoom:0.25
2. transform: scale(0.25)
