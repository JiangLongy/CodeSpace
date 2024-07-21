function listToTree(arr){
    let obj = {}
    let res = []
    arr.forEach(element => {
        obj[element.id] = element
    });

    arr.forEach((element)=>{
        let parent = obj[element.parentId]

        if(parent){
            parent.children = parent.children || []
            parent.children.push(element)
        }else{
            res.push(element)
        }
    })
    return res
}

const list = [
    {
        id: 1001,
        parentId: 0,
        name: "AA",
    },
    {
        id: 1002,
        parentId: 1001,
        name: "BB",
    },
    {
        id: 1003,
        parentId: 1001,
        name: "CC",
    },
    {
        id: 1004,
        parentId: 1003,
        name: "DD",
    },
    {
        id: 1005,
        parentId: 1003,
        name: "EE",
    },
    {
        id: 1006,
        parentId: 1002,
        name: "FF",
    },
    {
        id: 1007,
        parentId: 1002,
        name: "GG",
    },
    {
        id: 1008,
        parentId: 1004,
        name: "HH",
    },
    {
        id: 1009,
        parentId: 1005,
        name: "II",
    },
];

console.log(listToTree(list));