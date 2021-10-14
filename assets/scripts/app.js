const defaultResult =0;
let currentResult = defaultResult;
let logEntries = [];
// gets input from input fields
function getUserNumberInput(){
    return parseInt(userInput.value);
}
// generatres and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc,calcNumber){
    const calDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calDescription); // from vendor file
        
}

function addEntry(operator, prevResult ,calNumber , presentResult){

    const logEntry = {

        operator :operator,
        prevResult: presentResult,
        number: calNumber,
        result: presentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult  += enteredNumber;
    createAndWriteOutput('+', initialResult,enteredNumber);
   
    addEntry("Add", initialResult,enteredNumber,currentResult);
    
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult,enteredNumber);
    addEntry("subtract", initialResult,enteredNumber,currentResult);

}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult,enteredNumber);
    addEntry("multiply", initialResult,enteredNumber,currentResult);
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /=  enteredNumber;
    createAndWriteOutput('/', initialResult,enteredNumber);
    addEntry("Divide", initialResult,enteredNumber,currentResult);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener('click',divide);



