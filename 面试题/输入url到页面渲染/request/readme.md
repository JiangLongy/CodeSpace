# 输入url后
1. 确定对方的ip地址 使用ip协议做DNS解析
    - DNS解析：
      将域名对应的ip地址找到


    - www.baidu.com --> ip
        1. 去操作系统的本地缓存中查询ip
        2. 去系统配置的DNS服务器(缓存)中查询
        3. 去根服务器查询
        4. 去com顶级域名服务器
        5. 去baidu.com这个域名服务器 


# UDP
1. 无连接: 不需要再正式传输数据之前建立双方的连接
2. 只是数据报文的搬运工，不会对数据报文进行拆分和拼接

- 不可靠性(面向无连接，不会备份数据，没有拥塞控制)
- 高效
- 传输方式: 一对一、一对多、多对一、多对多
- 使用场景: 直播、游戏、视频通话

# TCP

1. 需要握手来建立和断开连接
2. 通过各种算法保障了数据的可靠性

- TCP头部字段
    1. Sequence number: 给每一个数据报文编号，用来标识数据报文的顺序
    2. Acknowledgement number: 用来标识期望收到的下一个数据报文的编号
    3. 标识符 
        1. URG = 1: 数据包的优先级高 1代表优先级最高
        2. ACK = 1: 该数据包有效 
        3. SYN = 1 ACK = 0: 连接请求报文
        4. SYN = 1 ACK = 1: 应答连接报文

- 三次握手建立连接

- http通信

- 四次挥手断开连接
1. A->B发送断开连接
2. B接收请求 告诉应用层释放TCP连接，此时B任然可以给A发送数据包
3. B向A发送最后一个数据包后，B进入Last-ACK状态
4. A接收到B的释放请求后，向B确认应答


1. 去操作系统的本地缓存中查询ip：

当用户第一次访问某个网站时，操作系统会先在自己的本地 DNS 缓存中查找是否有对应的 IP 地址。如果之前已经访问过4399.com，那么操作系统可能会在本地缓存中找到对应的IP地址。

2. 去系统配置的DNS服务器(缓存)中查询：

如果本地缓存中没有找到对应的 IP 地址，操作系统会向配置的 DNS 服务器发送查询请求，DNS 服务器会检查它的缓存中是否有4399.com对应的IP地址。如果DNS服务器的缓存中有相关记录，它会直接返回IP地址。

3. 去根服务器查询：

如果本地缓存和DNS服务器的缓存中都没有找到对应的 IP 地址，那么DNS服务器会从根域名服务器开始查询。根域名服务器知道顶级域名服务器（比如.com、.net、.org等）的地址，因此会返回com顶级域名服务器的IP地址。

4. 去com顶级域名服务器查询：

DNS服务器得到com顶级域名服务器的IP地址后，会向该服务器发送查询请求，com顶级域名服务器会返回负责管理4399.com域名的权威域名服务器的IP地址。

5. 去4399.com域名服务器查询：

最后，DNS服务器会向负责管理4399.com域名的权威域名服务器发送查询请求，该服务器会返回4399.com对应的IP地址给DNS服务器，DNS服务器再将IP地址返回给用户的操作系统，完成整个解析过程。

