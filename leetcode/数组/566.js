var matrixReshape = function(mat, r, c) {
    let res = []
    let size = mat.length*mat[0].length
    if(size!=r*c) return mat
    let arr = mat.flat(Infinity)
    for(let i = 0;i<r;i++){
        res.push(arr.splice(0,c))
    }
    return res
};
console.log(matrixReshape([[1,2],[3,4]],1,4));