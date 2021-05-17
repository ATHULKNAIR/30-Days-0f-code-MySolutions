function main() {
    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    // Write your code here
    
    let numSwaps = 0;
    for (let i = 0 ; i < n;i++){
        
        for(let j =0 ; j<n-1;j++){
            if(a[j]>a[j+1]){
                var temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
                numSwaps++;
            }
        }
        if(numSwaps === 0){
            break;
        }
    }
    console.log('Array is sorted in ' + numSwaps + ' swaps.')
    console.log('First Element:', a[0]);
    console.log('Last Element:', a[n - 1]);
    
    
}