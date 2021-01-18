let firstNumber = Number (prompt ('insert first number'));
let secondNumber = Number (prompt ('insert second number'));
let thirdNumber = Number (prompt ('insert third number'));

if (firstNumber>secondNumber && firstNumber>thirdNumber){
    if(secondNumber>thirdNumber){
        alert (firstNumber + ',' + secondNumber + ',' + thirdNumber)
    }else{
        alert (firstNumber + ',' + thirdNumber + ',' + secondNumber)
    }
}
if (secondNumber>firstNumber && secondNumber>thirdNumber){
    if(firstNumber>thirdNumber){
        alert (secondNumber + ',' + firstNumber + ',' + thirdNumber)
    }else{
        alert (secondNumber + ',' + thirdNumber + ',' + firstNumber)
    }
}
if (thirdNumber>secondNumber && thirdNumber>firstNumber){
    if(secondNumber>firstNumber){
        alert (thirdNumber + ',' + secondNumber + ',' + firstNumber)
    }else{
        alert (thirdNumber + ',' + firstNumber + ',' + secondNumber)
    }
}