# js事件流（面试题:事件触发过程是什么样的？）
1. 在window上往事件触发处传播，遇到注册的捕获事件会触发（从外往内传播）
2. 到达事件触发处
3. 从事件触发处往window上传播，遇到注册的冒泡事件会触发

- js事件默认都在冒泡的过程触发
- event.stopPropagation() || e.stopImmediatePropagation() 阻止默认事件的传播（用在冒泡就阻止冒泡，捕获就阻止捕获）
- e.stopImmediatePropagation() 阻止同一DOM绑定多个相同事件

# 事件委托
借助冒泡机制，将原本要添加到多个子容器上的事件添加到父容器上