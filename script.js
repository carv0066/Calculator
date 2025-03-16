const keys = document.querySelectorAll(".key");
const displayText = document.querySelector(".calc-display");
const deleteKey = document.querySelector(".delete");

//Functions 

function handleNumberInput (key) {

    if(displayText.textContent === "0" && operatorClicked === false) {
        firstNumber =  key.textContent;
        displayText.textContent = firstNumber;
        // console.log("The first Number is:", firstNumber);
    }
    else if(displayText.textContent !== "0" && operatorClicked === false) {
    //If a number is clicked and the current display is not a "0"
        firstNumber = displayText.textContent += key.textContent;
        // console.log("The first Number is:", firstNumber);
    }
    //Replace the display
    else if(secondNumber === "0" && operatorClicked === true) {
        secondNumber =  key.textContent;
        displayText.textContent = secondNumber;
        // console.log("The second Number is:", secondNumber);
    }
    else if(displayText.textContent !== "0" && operatorClicked === true) {
        secondNumber =  displayText.textContent += key.textContent;
        // console.log("The second Number is:", secondNumber);
    }
}

function handleDecimalInput (key) {
    // console.log("Adding decimal", displayText.textContent);
    displayText.textContent += key.textContent
}

function handleClearInput () {
    //Reset the calculator
    displayText.textContent = "0";
    firstNumber = displayText.textContent;
    operatorClicked = false;
    secondNumber = "0";
    operator = 0;
}

function handleResultValue () {
    //Sum
    if(operator === "+") {
        let num = Number(firstNumber) + Number(secondNumber)
        displayText.textContent = num;
        // console.log("The result is", num)
    }
    //Substraction
    if(operator === "-") {
        let sub = Number(firstNumber) - Number(secondNumber)
        displayText.textContent = sub;
        // console.log("The result is", sub)
    }
    //Multiplication
    if(operator === "×") {
        let mult = Number(firstNumber) * Number(secondNumber)
        displayText.textContent = mult;
        // console.log("The result is", mult)
    }
    //Division
    if(operator === "÷") {
        let division = Number(firstNumber) / Number(secondNumber)
        displayText.textContent = division;
        // console.log("The result is", division)
    }
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
        if(key.classList.contains("decimal") && !displayText.textContent.includes(".")) {
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
