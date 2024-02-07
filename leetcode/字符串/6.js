var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    let arr = new Array(numRows).fill('');
    let index = 0;
    let step = 1;

    for (let i = 0; i < s.length; i++) {
        arr[index] += s[i];
        if (index === 0) {
            step = 1;
        } else if (index === numRows - 1) {
            step = -1;
        }
        index += step;
    }

    return arr.join('');
};