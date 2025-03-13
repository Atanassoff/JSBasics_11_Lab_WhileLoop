function accountBalance(input) {
    let i = 0;
    let current = input[i];
    let num = 0;
    let sum = 0;

    while (current !== "NoMoreMoney") {
        num = Number(current);
        if (num < 0) {
            console.log(`Invalid operation!`);
            break;
        } else {
            sum += num;
            console.log(`Increase: ${num.toFixed(2)}`);
            i++;
            current = input[i];
        }
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["5.51", "69.42", "100", "NoMoreMoney"])
//Increase: 5.51 
//Increase: 69.42 
//Increase: 100.00 
//Total: 174.93 
accountBalance(["120", "45.55", "-150"])
//Increase: 120.00 
//Increase: 45.55 
//Invalid operation! 
//Total: 165.55