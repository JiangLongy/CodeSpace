- 什么是 diff 算法
    - VUE/React 等现代mvvm开发框架基于VDOM的
    - 组件渲染 返回虚拟DOM，VDOM 通过 DOM 显示
    - 当响应式数据更新后，会生成新的虚拟DOM
    - 比较新旧两个虚拟DOM树，并找到差异的算法叫diff算法


- 为什么还要diff算法
    出发点 时间复杂度 性能不好
 - 时间复杂度 O(n^3)
    - 每个节点跟另一棵树的所有节点比较 O(n) key
        v-if/v-show v-for 
        todoList
    - 相同key 节点 所有的属性又要比较O(n)
    - 比对完所有节点 O(n)

- diff算法
    vue2时代diff
    - 简单diff算法
    只做同层的对比，type变了就不再对比子节点 跨层级需要比较的场景比较少(刘强东/奶茶妹妹)
    不用去一味地为了复用节点，跨层
    ABCDE EABCD
    diff算法除了考虑本身的时间复杂度之外，还要考虑一个因素:DOM操作的次数
    - 双端diff
    子元素顺序发生改变
     O(n)
    vue3时代diff
    - 递增子序列的diff算法


    旧ABCD j 新DABC i

    ABCD       DABC
    j=3         i=0  lastIndex = 3
    BCDA        i=1  lastIndex = 3
    0           i=2  
    CDAB        

    