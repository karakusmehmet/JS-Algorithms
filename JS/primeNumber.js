function PrimeNumber(n){
    let array = []
    if(n>1){
        for(let i=1;i<=n;i++){
            if(n % i === 0){
                array.push(i);
            }
        }
        console.log(array);
        return array.length > 2 ? `${n} is not a Prime Number` : `${n} is Prime Number !!`;
    }
    else{
        return "It's not a Prime Number !";
    }
}

console.log(PrimeNumber(2027));