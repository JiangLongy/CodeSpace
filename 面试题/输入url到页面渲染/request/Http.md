# 超文本传输协议HTTP/0.9
1. 客户端发送GET请求，请求一个XXXXX/index.html文件
2. 服务器接收到请求后，读取对应的HTML文件，以ASCII码的字符流返回给客户端

- 特点
1. 只有请求行，没有请求头和请求体
2. 没有响应头
3. 传输的内容是以ASCII的字符流形式传输的

# HTTP /1.0
相比于0.9，1.0版本可以支持多种类型文件的传输

通过引入请求头和响应头，来让客户端和服务端能更加深入地交流 key-value形式

- 为什么有了请求头和响应头就能支持多种文件的数据传输

请求头: accept: text/html
        accept-encoding: gzip

响应头: content-encoding: br
        content-type: text/html ;charset=utf-8

# HTTP /1.1
