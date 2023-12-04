var findRestaurant = function(list1, list2) {
    let min = Infinity
    let arr = []
    for(let i = 0;i<list1.length;i++){
        let idx = list2.indexOf(list1[i])
        if(idx != -1 && idx+i<=min){
            if(idx+i<min){
                arr.pop(0)
            }
            
            arr.push(list1[i])
            min = idx+i
        }
    }
    return arr
};
let list1=["Shogun","Piatti","Tapioca Express","Burger King","KFC"]
let list2=["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
console.log(findRestaurant(list1,list2));