function main() {

var arr = [];
for (let i = 0; i < 6; i++) {
   arr[i] = readLine().split(' ');
   arr[i] = arr[i].map(Number);
}

var sumArray = [];
 
for (let i = 0; i < arr.length; i++) {
   for (let j = 0; j < arr[i].length; j++) {
    
     if (arr[i] && arr[i + 1] && arr[i + 2]) {
       if (arr[i][j + 1] != undefined && arr[i][j + 2] != undefined) {
         sumArray.push(arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2])
       }
     }
   }
}
 console.log(Math.max.apply(null, sumArray));
}
