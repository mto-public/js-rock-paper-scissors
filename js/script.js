function calculator() {
    let firstValue  = "", secondValue = "";
    let operator = "";
    let result = 0;
    let operatorName = "";

    while(firstValue === "" || secondValue === "") {
        alert("Plz enter the values.");
        firstValue = prompt("first value = ?");
        secondValue = prompt("second value = ?");      
        operator = prompt("opérator = ?");      
    }
    firstValue = parseFloat(firstValue);
    secondValue = parseFloat(secondValue);

    if(operator === "+") {
        operatorName = "addition";
        result = firstValue + secondValue;
    } else if(operator === "-") {
        operatorName = "sustraction";
        result = firstValue - secondValue;
    } else if(operator === "*") {
        operatorName = "multiple";
        result = firstValue * secondValue;
    } else if(operator === "/") {
        operatorName = "division";
        result = firstValue / secondValue;
    } else {
        console.log("opération non valide");
        return;
    }

    console.log(`${operatorName} : ${result}`);
}

calculator();
