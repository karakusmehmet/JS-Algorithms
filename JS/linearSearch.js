function linearSearch(arr,n){
    for(let i = 0 ; i< arr.length; i++){

        if(arr[i]=== n){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([2,4,5,6,7,8],10));