let obj = {
    name:'德玛西亚'
}
let ws = new WeakSet()//只能存Symbol和对象
ws.add(obj)
// obj = null
console.log(ws);//{}空对象
