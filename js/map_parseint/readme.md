# map + parseInt 经典题

- 我在解决这道题的时候去看了一下MDN文档
    map 支持接收一个callback，返回值是由callback的每一项组成的新数组
    callback 会接受到 item当前项 index下标 array
    parseInt 就是当前的callback item 可选的参数radix?进制表达
    默认 10进制
    0 无效 使用10进制
    1进制 item为2， NaN
    2进制 item为3， NaN