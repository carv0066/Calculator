const calculatorDisplay = document.querySelector(".screen-text");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.querySelector("delete");

function sendNumberValue (number) {
    // If current display value is 0, replace it, if not we want to add number
    // add reset "C" + ADD decimal
    const displayValue = calculatorDisplay.textContent;
    if(displayValue === "0") {
        calculatorDisplay.textContent = number;
    } else if(displayValue !== "0") {
        calculatorDisplay.textContent += number;
    }   
}

//Loop trough all elements and return value
inputBtns.forEach((btn) => {
    //Select all buttons with classList of num
    if(btn.classList.contains("num")) {
        // add a click event to each button to call function and console.log the value in the html
        btn.addEventListener(("click"), () => {
            //the btn.value is what returns as the number
            sendNumberValue(btn.value)
        })
    } else if (btn.classList.contains("operator")) {
        btn.addEventListener(("click"), () => {
            sendNumberValue(btn.value)
        })
    } else if (btn.classList.contains("decimal")) {
        btn.addEventListener(("click"), () => {
            sendNumberValue()
        })
    }
});
