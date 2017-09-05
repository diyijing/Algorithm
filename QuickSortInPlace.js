/*
in-place editon
 */
const log = console.log.bind(console);
const arr = [5, 3, 7, 4, 1, 9, 8, 6, 2];
quicksort2(arr);

function quicksort2(arr) {
    swap.arr = arr;
    quicksort(arr,0,arr.length-1);
    function quicksort(arr,left,right) {
        if(right > left){
            const pivotIndex = Math.floor(left+(right-left)*Math.random());
            const newIndex = partition(arr,left,right,pivotIndex);
            quicksort(arr,left,newIndex-1);
            quicksort(arr,newIndex+1,right);
        }
    }

    function partition(arr,left,right,pivotIndex) {
        const pivotValue = arr[pivotIndex];
        swap(right,pivotIndex);
        let storeIndex = left;
        for(;left<right;left++){
            if(arr[left]<=pivotValue){
                swap(storeIndex,left);
                storeIndex += 1;
            }
        }
        swap(right,storeIndex);
        return storeIndex;
    }

    function swap(i,j) {
        [swap.arr[i],swap.arr[j]] = [swap.arr[j],swap.arr[i]];
        /*
        swap.arr[i] ^= swap.arr[j];
        swap.arr[j] ^= swap.arr[i];
        swap.arr[i] ^= swap.arr[j];
         */
    }
}