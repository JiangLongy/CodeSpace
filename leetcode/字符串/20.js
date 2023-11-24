
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。
var isValid = function (s) {
    let stack = [];
    for(let i = 0;i<s.length;i++){
        if(s.charAt(i) == '('||s.charAt(i) == '['||s.charAt(i) == '{'){
            stack.push(s.charAt(i));
        }else{
            switch(s.charAt(i)){
                case ')':
                    if(stack.pop() != '('){
                        return false;
                    }
                    break;
                case ']':
                    if(stack.pop() != '['){
                        return false;
                    }
                    break;
                case '}':
                    if(stack.pop() != '{'){
                        return false;
                    }
            }
        }
    }
    return stack.length == 0;
    
}
console.log(isValid("(){"));
