//高频考题
var arr = []
// for(var i = 0;i<10;i++){
//     arr[i] = function(){
//         console.log(i);
//     }
// }


// for(var j = 0;j<arr.length;j++){
//     arr[j]()
// }

for(var i = 0;i<10;i++) {
//自执行函数
    (function a(j) {
       arr[i] = function() {
        console.log(j);
       }
    })(i)
}
