const merge = (left,right) => {
    let arr = [];

    while (left.length && right.length){
        if (left[0]>right[0]){
            arr.push(right.shift())
        } else {
            arr.push(left.shift())
        }
    }
    return [...arr, ...left, ...right]
}

const mergeSort = (array) => {
    if (array.length < 2){
        return array
    }

    const half = array.length / 2
    
    const left = array.splice(0,half)

    return merge(mergeSort(left),mergeSort(array))
}

let array = [3,1];
console.log(mergeSort(array))