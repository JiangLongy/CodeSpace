var checkPerfectNumber = function (num) {
    let res = 0
    let len = Math.floor(Math.sqrt(num))
    for (let i = 1; i <= len; i++) {
        if (num % i == 0) {
            res += i
            if (i !== 1) {
                res += (num / i)
            }
        }
    }
    return res == num ? true : false
};
console.log(checkPerfectNumber(28))