function Fibonnaci(n){
    const array = [0,1];
    for(let i = array.length ;i<n; i++){
        array[i] = array[i-1] + array[i-2];
    }

    return array;
}

console.log(Fibonnaci(7));