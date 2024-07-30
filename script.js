const calculatorDisplay = document.querySelector(".screen-text");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.querySelector(".delete");
const decimalBtn = document.querySelector(".decimal")

function sendNumberValue (number) {
    // If current display value is 0, replace it, if not we want to add number
    const displayValue = calculatorDisplay.textContent;
    if(displayValue === "0") {
        calculatorDisplay.textContent = number;
    } else if(displayValue !== "0") {
        calculatorDisplay.textContent += number;
    } 
    ///Adding a decimal to a number only once.
    decimalBtn.addEventListener(("click"), () => {
        //Disable decimal button once the event listener hears one click
        decimalBtn.disabled = true;
        console.log("contains decimals")
    })
}

//Reset Value when clicking on the clear "C" button
clearBtn.addEventListener(("click"), () => {
    //Set the value of the text box back to 0 whenever I click on the clear button
    calculatorDisplay.textContent = 0;
})


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
            sendNumberValue(btn.value)
        })
    }
});


function operations () {

}