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
        prevResult: prevResult,
        number: calNumber,
        result: presentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType){

    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator ;
    if(calculationType== 'Add'){

        currentResult  += enteredNumber;
        mathOperator = '+';
    }else  if (calculationType == "Subtract"){

        currentResult -= enteredNumber; 
        mathOperator = '-';
    }else if (calculationType== 'multiply'){

        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if( calculationType == 'Divide'){
       
        currentResult /= enteredNumber; 
        mathOperator = '/';
    }

    
    createAndWriteOutput(mathOperator, initialResult,enteredNumber);
   
  addEntry(calculationType, initialResult,enteredNumber,currentResult);


}

function add(){
    calculateResult('Add');
}

function subtract(){
    calculateResult('Subtract');

}

function multiply(){
    calculateResult('multiply');
}

function divide(){
    calculateResult('Divide');
}


addBtn.addEventListener('click',add);
multiplyBtn.addEventListener("click",multiply);
subtractBtn.addEventListener("click",subtract);
divideBtn.addEventListener("click",divide);

