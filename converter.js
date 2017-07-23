console.log("let's convert these temperatures!")

//first define all the buttons with get elements by ID:

let celsiusRadio = document.getElementById("celsius");
let farenheitRadio = document.getElementById("farenheit");
let convertButton = document.getElementById("convert");
let clearButton = document.getElementById("clear");
let inputField = document.getElementById("enteredTemp");
let outputField = document.getElementById("output");


// function checkInput() {
// //if the 
//    if (convertButton.addEventListener("checked", tempMath();
// //and   
//     inputField.value = ();
// //get the value of the inputField  
// //console log the input value 
// }

function tempMath() {
    if (celsiusRadio.checked) {
        outputField = ((inputField - 32) * (5 / 9)).toFixed(2);
        if (farenheitRadio.checked) {
            outputField = ((inputField * 9 / 5) + 32);
        }
    };


    // and a function which will highlight the output field in RED if the number is > "#",
    // and will highlight the output field in BLUE if the number is < "#".

    // function outputTooMuch() {
    //     if (outputField.value.length < 0) {
    //         //make the text DARK BLUE  
    //     }
    //     else if (outputField.value.length > 90) {
    //         //make the text DARK RED
    //     }
    // };

    //create a function which will clear the output when the "CLEAR OUTPUT" button is clicked 
    function resetOutput() {
        document.getElementById("enteredTemp").value = 0;
        outputField.innerHTML = " ";
    }
}

// //Original Exercise Notes Below:


// // This function should determine which conversion should
// // happen based on which radio button is selected.
// function determineConverter(clickEvent) {
//     console.log("event", clickEvent);
// }

// // Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter)