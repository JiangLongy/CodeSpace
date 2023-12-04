var maxCount = function (m, n, ops) {
    let arr = []
    for (let i = 0; i < m; i++) {
        arr = new Array(n).fill(0)
    }
    console.log(arr);
    for (let op of ops) {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (i < op[0]) {
                    arr[i][j] += 1
                }
                if (j < ops[1]) {
                    arr[i][j] += 1
                }
            }
        }
    }
    return arr
};

console.log(maxCount(3, 3, [[2, 2], [3, 3]]));
