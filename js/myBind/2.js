const obj = {
    name: 'Alice',
    greet: function () {
      console.log(`Hello, ${this.name}!`);
    },
  };
  
  // 调用obj的greet方法，此时this值将指向obj对象
  obj.greet(); // 输出：Hello, Alice!
  const greet = obj.greet;
  // 直接调用greet函数，此时this值将指向全局对象（window）
  greet(); // 输出：Hello, undefined
  
  // 使用bind函数将greet函数绑定到obj对象上
  const boundGreet = obj.greet.bind(obj);
  
  // 调用绑定后的函数，此时this值将永久地绑定到obj对象
  boundGreet(); // 输出：Hello, Alice!