function maxNumber(input) {
    let i = 0;
    let txt = input[i];
    let num = 0;
    let max = Number.MIN_SAFE_INTEGER;
    while (txt !== "Stop") { 
        num = Number(txt);
        if (num > max) {
            max = num;
        }
        i++;
        txt = input[i];
    }
    console.log(max);
}

maxNumber(["100", "99", "80", "70", "Stop"]) 
//100 
maxNumber(["-10", "20", "-30", "Stop"])
//20 
maxNumber(["45", "-20", "7", "99", "Stop"])
//99 
maxNumber(["999", "Stop"])
//999 
maxNumber(["-1", "-2", "Stop"])
//-1