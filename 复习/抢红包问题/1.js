function redBag(people,money){
    let remainMoney = money;
    let remainPeople = people;
    let result = [];

    for(let i = 1;i<people;i++){
        let avg = remainMoney/remainPeople*2;
        let amount = Math.random()*avg
        amount = Math.floor(amount*100)/100
        result.push(amount)
        remainMoney -= amount;
        remainPeople--;
    }
    result.push(remainMoney)
    return result
}

console.log(redBag(2,3));
