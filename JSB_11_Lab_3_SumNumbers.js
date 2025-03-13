function sumNumbers(input){
    let n = input[0];
    let i = 1;
    let sum = input[i];
    while(sum < n){
        i++;
        sum += input[i];
    }
    console.log(sum);  
}

sumNumbers(["100", "10", "20", "30", "40"]) 
//100 
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]) 
//21
