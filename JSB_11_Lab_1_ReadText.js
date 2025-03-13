function readText(input) {
    let index = 0;
    let str = input[index];
    while(str !== "Stop"){
        console.log(str);
        index++;       
        str = input[index];
    }    
}

readText(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"]) 
//Nakov SoftUni Sofia Bulgaria SomeText 
readText(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]) 
//Sofia Berlin Moscow Athens Madrid London Paris