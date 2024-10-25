
const A = [1,2];
const B = [3,4,5];

function cartesianProduct(A,B){

    if(!A.length || !B.length){
        return "Every array should have at least one element"
    }
    let newArray = []
    for(let i = 0;i<A.length;i++){
        for(let j = 0;j<B.length;j++){
            newArray.push([A[i],B[j]])
        }
    }
    return newArray;
}

console.log(cartesianProduct(A,B));
// BIG-0 = O(mn);