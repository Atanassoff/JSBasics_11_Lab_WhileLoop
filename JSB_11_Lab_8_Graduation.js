function graduation(input) {
    let name = input[0];
    let grade = 1;
    let mark = 0;
    let badMarks = 0;
    let sum = 0;
    let avrg = 0;
    let excluded = false;
    while (grade <= 12) {
        mark = Number(input[grade]);
        if (mark < 4 && badMarks < 2) {
            badMarks++;
            continue;
        } else if (mark < 4 && badMarks === 2) {
            excluded = true;
            console.log(`${name} has been excluded at ${grade} grade`);
            break;
        }
        sum += mark;
        grade++;
    }
    if (!excluded) {
        avrg = (sum / 12).toFixed(2);
        console.log(`${name} graduated. Average grade: ${avrg}`);
    }
}


graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])
//Gosho graduated. Average grade: 5.53 
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])
//Mimi has been excluded at 8 grade