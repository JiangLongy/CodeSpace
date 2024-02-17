function MyProxy(target, handle) {
    this.clone = function (myObj) {
        // 是否有嵌套结构
        if (typeof (myObj) !== 'object' || myObj == null) {
            return myObj;
        }

        var newObj = new Object();

        // 递归
        for (let i in myObj) {
            newObj[i] = this.clone(myObj[i]);
        }

        return newObj;
    }
    //深度克隆目标对象
    let targetCopy = this.clone(target);
    Object.keys(targetCopy).forEach(function (key) {
        Object.defineProperty(targetCopy, key, {
            get: function () {
                // 
                return handle.get && handle.get(target, key)
            },
            set: function (newVal) {
                if (!handle.set) {
                    handle.set(target, key, newVal);
                } else {
                    // 对象有这个属性时才允许被操作
                    handle.set && handle.set(target, key, newVal);
                }
            },
            delete: function () {
                if (!handle.deleteProperty) {
                    delete target[key];
                } else {
                    // 对象有这个属性时才允许被删除
                    handle.deleteProperty && handle.deleteProperty(target, key);
                }
            }
        });
    });

    // 返回
    return targetCopy;
}
