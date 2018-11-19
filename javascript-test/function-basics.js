window.onload = () => {
    
    const functionCalls =document.getElementById("function-calls");
    const callUserInput = document.getElementById("call-user-input"); 

    functionCalls.onclick = () => {
       simpleFunction();
       const returnValue = functionReturn();
        console.log(returnValue);
    }

    callUserInput.onclick = () => {
        const userInputTextParagraph = document.getElementById("show-user-input");
        const userInput = document.getElementById("user-input")
        userInputTextParagraph.textContent = userInput.value;
    }
    
}
function simpleFunction() {
    const displayText = "functions should consist of statements designed to perform a single task.";
    const simpleFunctionParagraph =document.getElementById("simple-function");
    console.log("functions should consist of statements designed to perform a single task.");
    console.log(displayText);
    simpleFunctionParagraph.textContent = "functions should consist of statements designed to perform a single task.";
}

function functionReturn(){
    return "Many functions return values.";
}

function add(a, b) {
    console.log(a+b);
}

function adder() {
    console.log(2+3);
}
function functionParameters(value) {
const functionParametersParagraph = document.getElementById("function-parameters");
console.log(value);
functionParametersParagraph.textContent = value;  
}

//simpleFunction();
//functionParameters("Many functions return values.");
//add(2, 3);
//dder(); 
