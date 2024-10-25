const array = [2,4,6,8,9,19,24];
function recursiveBinarySearch(arr,target,leftIndex,rightIndex){
    
    if(leftIndex > rightIndex){
        return -1;
    } 
    let middleIndex = Math.floor((leftIndex + rightIndex)/2);
    if(target === arr[middleIndex]){
        return middleIndex;
    }

    return target < arr[middleIndex] ? recursiveBinarySearch(arr,target,leftIndex,middleIndex -1) : recursiveBinarySearch(arr,target,middleIndex + 1,rightIndex) 
}

console.log(recursiveBinarySearch(array,4,0,array.length - 1));
// BIG 0(logn);

