function password(input) {
    let name = input[0];
    let pass = input[1];
    let i = 2;
    let currentWord = input[i];
    i++
    while (currentWord !== pass) {
        currentWord = input[i];
        i++;
    }
    console.log(`Welcome ${name}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"])
//Welcome Nakov! 
password(["Gosho", "secret", "secret"])
//Welcome Gosho!