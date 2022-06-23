const num1 = parseInt(prompt('First Num: '));
const operator = prompt('Operator: ( either +, -, * or /); ');
const num2 = parseInt(prompt('Second Num: '));

let result;

if(operator == '+'){
    result = num1 + num2;
} else if (operator == '-') {
    result = num1 - num2;
} else if (operator == '*') {
    result = num1 * num2;
} else{
    result = num1 / num2;
}

document.write(`${num1} ${operator} ${num2} = ${result}`);