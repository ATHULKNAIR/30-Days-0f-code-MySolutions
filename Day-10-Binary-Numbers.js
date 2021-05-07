function main() {
    var n = parseInt(readLine().trim(), 10);
    var binary = [];
   
    while(n>0){                          // Converts to binary
        binary.push(n%2);
        n = Math.floor(n/2);      
    }

    var ones = 0;
    var max = 0;
    
    for(let i =0;i<binary.length;i++){        // Checks no.of concecutive one's
        if(binary[i]===1 ){
            ones +=1;
        }else if(binary[i]===0){
            if(ones>max) max = ones;
            ones = 0;
        }
    }
    if(ones>max) max = ones;
    console.log(max);
}
