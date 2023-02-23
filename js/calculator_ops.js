let result;

const operator = prompt('Enter operator (+,-,*,/)');
const unum1 = parseInt(prompt('First number'));
const unum2 = parseInt(prompt('Second number'));

switch(operator){
    case '+':
        result = unum1+unum2;
        alert(`${unum1} + ${unum2} = ${result}`);
        break;
    case '-':
        result = unum1-unum2;
        alert(`${unum1} - ${unum2} = ${result}`);
        break;
    case '*':
        result = unum1*unum2;
        alert(`${unum1} * ${unum2} = ${result}`);
        break;
    case '/':
        result = unum1/unum2;
        alert(`${unum1} / ${unum2} = ${result}`);
        break;
    default:
        alert('ERROR');
        break;
}
