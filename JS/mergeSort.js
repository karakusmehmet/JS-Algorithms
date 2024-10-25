function mergeSort(arr){
    
    if(arr.length < 2){
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);

    return merge(mergeSort(left),mergeSort(right));   
}

function merge(left,right){
    const sortedArray = [];
    while(left.length && right.length){
        if(left[0]<= right[0]){
            sortedArray.push(left.shift())
        }
        else{
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray,...left,...right];
}

const arr = [8,20,-2,4,-6]
console.log(mergeSort(arr));

// Big O = O(nlogn)
