// Function for arithmetic operations
function calculate(operation) {
    const num1 = parseFloat(document.getElementById("input1").value);
    const num2 = parseFloat(document.getElementById("input2").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    switch (operation) {
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
                alert("Cannot divide by zero");
                return;
            }
            result = num1 / num2;
            break;
    }
    
    showResult(result);
}

function power() {
    const num1 = parseFloat(document.getElementById("input1").value);
    const num2 = parseInt(document.getElementById("input2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result = 1;
    for (let i = 0; i < num2; i++) {
        result *= num1;
    }

    showResult(result);
}

function showResult(result) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Result: ${result}`;
    if (result < 0) {
        resultElement.style.color = "red";
    } else {
        resultElement.style.color = "black";
    }
}

function clearInputs() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("result").textContent = "Result: ";
}