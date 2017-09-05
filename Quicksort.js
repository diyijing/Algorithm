/*
快速排序使用分治法（Divide and conquer）策略来把一个序列（list）分为两个子序列（sub-lists）。
步骤为：
1、从数列中挑出一个元素，称为"基准"（pivot），
2、重新排序数列，所有比基准值小的元素摆放在基准前面，所有比基准值大的元素摆在基准后面（相同的数可以到任一边）。
    在这个分区结束之后，该基准就处于数列的中间位置。这个称为分区（partition）操作。
3、递归地（recursively）把小于基准值元素的子数列和大于基准值元素的子数列排序。
递归到最底部时，数列的大小是零或一，也就是已经排序好了。这个算法一定会结束，因为在每次的迭代（iteration）中，它至少会把一个元素摆到它最后的位置去。
 */
function quicksort(arr) {
    const greater = [];
    const lesser = [];
    if(arr.length<=1){
        return arr;
    }
    const pivotIndex = Math.floor(arr.length/2);
    console.log(pivotIndex,arr);
    const pivotValue = arr[pivotIndex];
    for(let [i,v] of arr.entries()){
        if (v>=pivotValue && i!== pivotIndex) {
            greater.push(v);
        } else if(i!== pivotIndex) {
            lesser.push(v);
        }
    }
    return quicksort(lesser).concat([pivotValue].concat(quicksort(greater)));
}

//console.log(quicksort([5, 3, 7, 4, 5, 9, 8, 6, 2]));
