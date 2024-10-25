
function recursiveFibonanacci(n){
    
    if(n<2){
        return n;
    }
    return recursiveFibonanacci(n-1) + recursiveFibonanacci(n - 2);
}

console.log(recursiveFibonanacci(11))