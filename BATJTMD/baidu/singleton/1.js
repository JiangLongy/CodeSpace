//es6 class 类
//类是抽象的概念
class SingleDog{
    show(){
        console.log('我是一个单例对象');
    }
    static getInstance(){
        console.log('静态方法');

    }
}

const s1 = new SingleDog();
const s2 = new SingleDog();

// s1.show()
SingleDog.getInstance()

// console.log(s1 === s2); //false 不同的内存空间，值也不相等