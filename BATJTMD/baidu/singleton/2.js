// es6 class 企业级开发 大型项目 学java
class SingleDog{
    //属于对象的
    show(){
        console.log('我是一个单例对象');
    
    }
    // 不要直接new 
    // 属于类的
    static getInstance(){
        // console.log('静态方法');
        if(!SingleDog.instance){
            SingleDog.instance = new SingleDog();
        }
        return SingleDog.instance;

    }
}
//类的方法
const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()

console.log(s1 === s2);
// new 过程 不同的地址 如何返回同一个房间
// s1 s2 里的值是地址 
// 同一个地址 先生成地址 然后下一次再new 去判断一下 如果已经有了，就不用再new了
// if else
// 单例模式    
