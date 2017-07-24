console.log("let's convert these temperatures!")

//first define all the buttons with get elements by ID:

var celsiusRadio = document.getElementById("celsius");
var farenheitRadio = document.getElementById("farenheit");
var convertButton = document.getElementById("convert");
var clearButton = document.getElementById("clear");
var inputField = document.getElementById("enteredTemp");
var outputField = document.getElementById("output");


//now create a function that will do the conversion math when called. 

function tempMath() {
    if (celsiusRadio.checked) {
        console.log(inputField.value, "Celsius");
        inputField.value = parseFloat(inputField.value);
        outputField.value = ((inputField.value - 32) * (5 / 9)).toFixed(2);
    } else {
        (farenheitRadio.checked);
        console.log(inputField.value, "Farenheit");
        inputField.value = parseFloat(inputField.value);
        outputField.value = ((inputField.value * 9 / 5) + 32).toFixed(2);
    }
};
convertButton.addEventListener("click", tempMath);

// and a function which will highlight the output field in RED if the number is > "#",
// and will highlight the output field in BLUE if the number is < "#".

function changeColor() {
    if (outputField.value < 0) {
        document.getElementById("output").style.color = 'blue';
    } else if (outputField.value > 90) {
        document.getElementById("output").style.color = 'red';
    } else document.getElementById("output").style.color = 'green';
};
convertButton.addEventListener("click", changeColor);

//create a function which will clear the output when the "CLEAR OUTPUT" button is clicked 
function resetOutput() {
    document.getElementById("enteredTemp").value = " ";
    document.getElementById("output").value = " ";
}
clearButton.addEventListener("click", resetOutput);

// //Original Exercise Notes Below:


// // This function should determine which conversion should
// // happen based on which radio button is selected.
// function determineConverter(clickEvent) {
//     console.log("event", clickEvent);
// }

// // Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter)