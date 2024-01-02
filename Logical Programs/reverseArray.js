// Reverse array
let arr = ['R', 'A', 'T', 'L', 'A', 'M'];

function reverseArray(arr){
    let revArr = [];
    for(let i = arr.length - 1; i>=0; i--){
        revArr.push(arr[i]);
    }
    return revArr;
}

console.log(reverseArray(arr));
