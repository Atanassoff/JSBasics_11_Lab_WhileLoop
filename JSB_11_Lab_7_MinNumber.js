function minNumber(input){
    let i = 0;
    let txt = input[i];
    let min = Number.MAX_SAFE_INTEGER;
    let num = 0;
    while(txt !== "Stop"){
        num = Number(txt);
        if(num < min){
            min = num;
        }
        i++;
        txt = input[i];
    }
    console.log(min); 
}

minNumber(["100", "99", "80", "70", "Stop"]) 
//70 
minNumber(["-10", "20", "-30", "Stop"]) 
-30 
minNumber(["45", "-20", "7", "99", "Stop"]) 
-20 
minNumber(["999", "Stop"]) 
//999 
minNumber(["-1", "-2", "Stop"]) 
//-2