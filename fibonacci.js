const fibs = (n, array = [0,1]) => {
if (n===1) {
    array.pop();
    return array;
} else if (n===2) {
    return array;
}
array.push(Number(array[array.length-1])+Number(array[array.length-2]))
array.length === n ? console.log(array) : fibs(n,array);
}

let array = fibs(10);