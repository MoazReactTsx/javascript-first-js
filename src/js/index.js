function program1() {
    const input = document.getElementById("program1Input");
    const value = input.value;
    if(value.length === 0){
        alert("Please enter a valid number");
        return;
    }
    document.getElementById("program1Output").innerText = value;
}

function program2() {
    const input = document.getElementById("program2Input");
    const value = input.value;
    const result = value;
    document.getElementById("program2Output").innerText = (result % 3 === 0 && result % 4 === 0) ? "Yes" : "No";
}


function program3() {
    const input1 = document.getElementById("program3Input1");
    const input2 = document.getElementById("program3Input2");
    const value1 = input1.value;
    const value2 = input2.value;
    const num1 = parseInt(value1);
    const num2 = parseInt(value2);
    document.getElementById("program3Output").innerText = Math.max(num1, num2);
}

function program4() {
    const input = document.getElementById("program4Input");
    const value = input.value;
    const result =parseInt(value);
    document.getElementById("program4Output").innerText = result >= 0 ? "Positive" : "Negative";
}

function program5() {
    const input1 = document.getElementById("program5Input1");
    const input2 = document.getElementById("program5Input2");
    const input3 = document.getElementById("program5Input3");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const num1 = parseInt(value1);
    const num2 = parseInt(value2);
    const num3 = parseInt(value3);
    const max = Math.max(num1, num2, num3);
    const min = Math.min(num1, num2, num3);
    document.getElementById("program5Output").innerText = `the Max => ${max}, the Min => ${min}`;
}

function program6() {
    const input = document.getElementById("program6Input");
    const value = input.value;
    const num = parseInt(value);
    if (isNaN(num)) {
        alert("Please enter a valid number");
        return;
    }
    document.getElementById("program6Output").innerText = num % 2 === 0 ? "Even" : "Odd";
}

function program7() {
    const input = document.getElementById("program7Input");
    const value = input.value.toLowerCase();
    if (value.length !== 1 || !isNaN(value)) {
        alert("Please enter a valid character");
        return;
    }
    const vowels = "aeiou";
    document.getElementById("program7Output").innerText = vowels.includes(value) ? "Vowel" : "Consonant";
}

function program8() {
    const input = document.getElementById("program8Input");
    const value = input.value;
    const num = parseInt(value);
    if (isNaN(num) || num <= 0) {
        alert("Please enter a valid positive number");
        return;
    }
    let result = [];
    for (let i = 1; i <= num; i++) {
        result = [...result, i];
    }
    document.getElementById("program8Output").innerText = result.join(", ");
}

function program9() {
    const input = document.getElementById("program9Input");
    const value = input.value;
    const num = parseInt(value);
    if (isNaN(num) || num <= 0) {
        alert("Please enter a valid positive number");
        return;
    }
    let result = [];
    for (let i = 1; i <= 12; i++) {
        result.push(num * i);
    }
    document.getElementById("program9Output").innerText = result.join(" ");
}

function program10() {
    const input = document.getElementById("program10Input");
    const value = input.value;
    const num = parseInt(value);
    if (isNaN(num) || num <= 0) {
        alert("Please enter a valid positive number");
        return;
    }
    let result = [];
    for (let i = 2; i <= num; i += 2) {
        result.push(i);
    }
    document.getElementById("program10Output").innerText = result.join(", ");
}

function program11() {
    const input1 = document.getElementById("program11Input1");
    const input2 = document.getElementById("program11Input2");
    const value1 = input1.value;
    const value2 = input2.value;
    const base = parseInt(value1);
    const exponent = parseInt(value2);
    if (isNaN(base) || isNaN(exponent)) {
        alert("Please enter valid numbers for base and exponent");
        return;
    }
    const result = Math.pow(base, exponent);
    document.getElementById("program11Output").innerText = `Result=> ${result}`;
}

function program12() {
    const inputs = [
        document.getElementById("program12Input1"),
        document.getElementById("program12Input2"),
        document.getElementById("program12Input3"),
        document.getElementById("program12Input4"),
        document.getElementById("program12Input5")
    ];
    const marks = inputs.map(input => parseInt(input.value));
    if (marks.some(isNaN)) {
        alert("Please enter valid numbers for all subjects");
        return;
    }
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const average = total / marks.length;
    const percentage = (total / 500) * 100;
    document.getElementById("program12Output").innerText = `total: ${total} ---- average: ${average} ---- percentage: ${percentage.toFixed(2)}%`;
}



function program13() {
    const input = document.getElementById("program13Input").value;
    const month = parseInt(input);

    if (isNaN(month) || month < 1 || month > 12) {
        alert("Please enter a valid month number (1-12)");
        return;
    }

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const days = daysInMonth[month - 1];

    document.getElementById("program13Output").innerText = `Days in Month: ${days}`;
}

function program14() {
    const marks = [
        parseInt(document.getElementById("program14Input1").value),
        parseInt(document.getElementById("program14Input2").value),
        parseInt(document.getElementById("program14Input3").value),
        parseInt(document.getElementById("program14Input4").value),
        parseInt(document.getElementById("program14Input5").value)
    ];

    if (marks.some(mark => isNaN(mark))) {
        alert("Please enter valid marks for all subjects");
        return;
    }

    const total = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = (total / (marks.length * 100)) * 100;

    let grade = "F";
    if (percentage >= 90) grade = "A";
    else if (percentage >= 80) grade = "B";
    else if (percentage >= 70) grade = "C";
    else if (percentage >= 60) grade = "D";
    else if (percentage >= 40) grade = "E";

    document.getElementById("program14Output").innerText = `percentage: ${percentage.toFixed(2)}%, grade: ${grade}`;
}

function program15() {
    const input = document.getElementById("program15Input").value;
    const month = parseInt(input);

    if (isNaN(month) || month < 1 || month > 12) {
        alert("Please enter a valid month number (1-12)");
        return;
    }

    let days;
    switch (month) {
        case 2:
            days = 28; 
            break;
        case 4: case 6: case 9: case 11:
            days = 30;
            break;
        default:
            days = 31;
    }

    document.getElementById("program15Output").innerText = `Days in Month: ${days}`;
}

function program16() {
    const input = document.getElementById("program16Input").value.toLowerCase();

    if (!input || input.length !== 1 || !/^[a-z]$/.test(input)) {
        alert("Please enter a single valid letter");
        return;
    }

    const vowels = "aeiou";
    const result = vowels.includes(input) ? "Vowel" : "Consonant";

    document.getElementById("program16Output").innerText = result;
}

function program17() {
    const num1 = parseInt(document.getElementById("program17Input1").value);
    const num2 = parseInt(document.getElementById("program17Input2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }

    const max = Math.max(num1, num2);
    document.getElementById("program17Output").innerText = `Maximum: ${max}`;
}

function program18() {
    const num = parseInt(document.getElementById("program18Input").value);

    if (isNaN(num)) {
        alert("Please enter a valid number");
        return;
    }

    const result = num % 2 === 0 ? "Even" : "Odd";
    document.getElementById("program18Output").innerText = result;
}

function program19() {
    const num = parseInt(document.getElementById("program19Input").value);

    if (isNaN(num)) {
        alert("Please enter a valid number");
        return;
    }

    let result;
    if (num > 0) result = "Positive";
    else if (num < 0) result = "Negative";
    else result = "Zero";

    document.getElementById("program19Output").innerText = result;
}

function program20() {
    const num1 = parseFloat(document.getElementById("program20Input1").value);
    const operator = document.getElementById("program20Operator").value;
    const num2 = parseFloat(document.getElementById("program20Input2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Division by zero is not allowed");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operator");
            return;
    }

    document.getElementById("program20Output").innerText = `Result: ${result}`;
}