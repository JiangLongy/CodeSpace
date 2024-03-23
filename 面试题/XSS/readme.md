# XSS

Cross Site Scripting 跨站脚本攻击

黑客往你的页面注入恶意脚本

1. 可以窃取cookie信息: 黑客可以在其他电脑上模拟登录状态
2. 可以监听用户的行为: 监听用户键盘事件，掌握用户信息
3. 伪造登录系统
4. 在你的页面生成浮窗广告

- 怎么注入？
1. 存储型攻击
把脚本提交到数据库中
2. 反射型攻击
3. 基于DOM的XSS

- 怎么防范？
1. <script></script> 服务端对接收到的脚本进行转码
2. 利用好CSP内容安全策略，第三方js代码是无法被加载的
3. HTTPOnly
Set-Cookie:XXXXXXXXXXXXXXXXX;HttpOnly

# CSRF 
Cross Site Request Forgery 跨站请求伪造

黑客引诱你打开一个网址，黑客拿到你的登录状态并通过第三方站点来操作恶意行为

- 怎么防范？
1. 利用好Cookie的SameSite属性
2. 服务端验证请求来源