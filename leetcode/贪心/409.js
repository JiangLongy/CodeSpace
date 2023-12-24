var longestPalindrome = function (s) {
    let set = new Set()
    let i = 0
    let len = s.length
    let max = 1
    while (i < len) {
        if (!set.has(s[i])) {
            set.add(s[i])
            max += Math.floor((sum(s, s[i]) / 2)) * 2
        }
        i++
    };
    return s.length % 2 === 0 ? max - 1 : max
}
function sum(str, a) {
    let index = str.indexOf(a)
    count = 0
    while (index != -1) {
        index = str.indexOf(a, index + 1)
        count++
    }
    return count
}
console.log(longestPalindrome("a"));