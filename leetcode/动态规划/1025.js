var divisorGame = function(n) {
    if (n === 1) {
        return false;
    }
    
    return !divisorGame(n - 1);
};
console.log(divisorGame(5));