let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// let n = parseInt(readLine())

// let arr = readLine().split(' ').map(Number)
// let maximumNumber = Number.NEGATIVE_INFINITY
// let minimumNumber = Number.POSITIVE_INFINITY
// for(let i=0; i<n; i++){
//     let find = Math.abs(arr[i]-i)
//     if(find>maximumNumber){
//           maximumNumber=find
//     }else if(find<minimumNumber){
//         minimumNumber = find
//     }
// }
// let finalOutput = maximumNumber/minimumNumber
// console.log(finalOutput.toFixed(1))


//second Question

let n = parseInt(readLine())

let arr = readLine().split(" ").map(Number)
// console.log(arr)
  
let map = new Map()
for(let index=0; index<n; index++){
    if(map.has(arr[index])){
        map.set(arr[index],map.get(arr[index]+1))
    }else{
        map.set(arr[index],1)
    }
}
let repeatNmbr = null;
let missNmbr = null;
for(let key of map.keys()){
    let keys =key
    if(map.get(keys)>1){
        repeatNmbr = keys
    }
}
for(let i=1; i<=n; i++){
    if(!(map.has(i))){
        missNmbr = i
        break
    }
}
console.log(repeatNmbr+" "+missNmbr)