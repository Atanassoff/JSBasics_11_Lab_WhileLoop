function sequence2kPlus1(n){
    let currentNumber = 1;
    while(currentNumber <= n){
        console.log(currentNumber);
        currentNumber = (currentNumber * 2 + 1);
    }
}

sequence2kPlus1(3) 
//1 3 
sequence2kPlus1(8) 
//1 3 7 
sequence2kPlus1(17) 
//1 3 7 15 
sequence2kPlus1(31) 
//1 3 7 15 31