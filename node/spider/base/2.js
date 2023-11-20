console.log(process.argv);
let player = console.log(process.argv[process.argv.length-1]);
let arr = ['rock','scissors','paper']
let index = Math.floor(Math.random()*3)
let computer = arr[index]
//比较
console.log(computer);
if(computer === player){
    console.log('平局');
}else if(
    (computer === 'rock' && player === 'paper')||
    (computer === 'paper' && player === 'scissors')||
    (computer === 'scissors' && player === 'rock')
    ){
        console.log('你赢了!');
}else{
    console.log('你输了');
}