const number = parseInt(prompt('Enter an integer: '));
for(let i=1;i<=3;i++){
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
    alert(`${number} * ${i} = ${result}`);
}
