const keys = document.querySelectorAll(".key");
const displayText = document.querySelector(".calc-display");
const deleteKey = document.querySelector(".delete");

//Functions 
let calculationComplete = false;

function handleNumberInput (key) {

    if (calculationComplete) return;

    else if(displayText.textContent === "0" && operatorClicked === false) {
        firstNumber =  key.textContent;
        displayText.textContent = firstNumber;
    }
    else if(displayText.textContent !== "0" && operatorClicked === false) {
    //If a number is clicked and the current display is not a "0"
        firstNumber = displayText.textContent += key.textContent;
    }
    //Replace the display
    else if(secondNumber === "0" && operatorClicked === true) {
        secondNumber =  key.textContent;
        displayText.textContent = secondNumber;
    }
    else if(displayText.textContent !== "0" && operatorClicked === true) {
        secondNumber =  displayText.textContent += key.textContent;
    }
}

function handleDecimalInput(key) {
    if (calculationComplete) return;

    if (!operatorClicked && !firstNumber.includes(".")) {
        firstNumber += key.textContent;
        displayText.textContent = firstNumber;
    } 
    else if (operatorClicked && !secondNumber.includes(".")) {
        secondNumber += key.textContent;
        displayText.textContent = secondNumber;
    }
}

function handleClearInput () {
    //Reset the calculator
    displayText.textContent = "0";
    firstNumber = displayText.textContent;
    operatorClicked = false;
    secondNumber = "0";
    operator = 0;
    calculationComplete = false;
}

function handleResultValue () {

    let result;
    //Sum
    if(operator === "+") {
        result = Number(firstNumber) + Number(secondNumber)
    }
    //Substraction
    if(operator === "-") {
        result = Number(firstNumber) - Number(secondNumber)
    }
    //Multiplication
    if(operator === "×") {
        result = Number(firstNumber) * Number(secondNumber)
    }
    //Division
    if(operator === "÷") {
        result = Number(firstNumber) / Number(secondNumber)
    }

    displayText.textContent = result;

    firstNumber = result.toString();
    secondNumber = "0";
    operatorClicked = false;
    operator = 0;
    calculationComplete = true; // Lock input
}

let firstNumber = displayText.textContent;
let operatorClicked = false;
let secondNumber = "0";
let operator = 0;
//Update the operator inside the eventlistener and define it outside so it doesn't get updated whenever I click another key

//Loop trough all Keys
keys.forEach(key => {
    key.addEventListener("click", function() {
        // If a number is Clicked
        if(key.classList.contains("number")) {
            handleNumberInput(key);
        }
        //If an Operator is Clicked
        if(key.classList.contains("operator")) {
            operatorClicked = true;
            operator = key.textContent;
            // console.log("the operator is:", operator)
        }
        // If a decimal is Clicked
        if(key.classList.contains("decimal")) {
            handleDecimalInput(key);
        }
        //If the delete key is clicked
        if(key.classList.contains("delete")) {
            handleClearInput (key);
        }
        //If the equal key is clicked
        if(key.classList.contains("equal")) {
            handleResultValue(key);
        }
    })
})
