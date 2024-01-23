var isSubsequence = function (s, t) {
  if (!s) {
    return true
  }
  let str = s;
  let sf = 0;
  let tf = 0;
  let cf = 0
  while (tf < t.length) {
    if (s[sf] == t[tf]) {
      sf++;
      tf++;
      cf++;
    } else {
      str = str.slice(0, cf) + t[tf] + str.slice(cf);
      tf++
      cf++
    }

  }
  return str === t;
};

console.log(isSubsequence("b", "abc"));