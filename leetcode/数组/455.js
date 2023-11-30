var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)
    let i = 0,j = 0,count = 0
    while(i<g.length&&j<s.length){
        if(g[i]<=s[j]){
            i++
            j++
            count++
        }else if(g[i]>s[j]){
            j++
        }
    }
    
    return count
};
console.log(findContentChildren([1,2,3],[1,1]));