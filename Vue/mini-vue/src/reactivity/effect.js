const targetMap = new WeakMap();
let activeEffect = null;//一个副作用函数


export function effect(fn,options = {}){ //watch 和 computed 的核心逻辑

    const effectFn = ()=>{
        try{
            activeEffect = effectFn
            return fn()
        }finally{
            activeEffect = null
        }
    }
    if(!options.lazy){
        effectFn();
    }
    effectFn.scheduler = options.scheduler;
    return effectFn;
}
//为某个属性添加effect
export function track(target,key){
    // targetMap = {
    //     target:{
    //         key:[Effect1,Effect2]
    //     }
    // }

    let depsMap = targetMap.get(target);
    if (!depsMap){//初次读取到值 收集effect
        targetMap.set(target,depsMap = new Map())
    }
    let deps = depsMap.get(key);

    if (!deps){//该属性还未添加过副作用
        depsMap.set(key,deps = new Set());
    }

    if(!deps.has(activeEffect) && activeEffect){
        //存入一个effect函数
        deps.add(activeEffect);
    }
    depsMap.set(key,deps);
}

//触发某个属性 effect
export function trigger(target,key){
    const depsMap = targetMap.get(target);
    if(!depsMap){//当前对象中所有的key都没有副作用函数（从来没有使用过）
        return
    }
    const deps = depsMap.get(key);
    if(!deps){
        return
    }
    deps.forEach(effectFn => {
        if(effectFn.scheduler){
            effectFn.scheduler();
        }else{
            effectFn();
        }
    });
}
