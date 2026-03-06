function addNumbers(numberOne, numberTwo) {

let mySum = numberOne + numberTwo;
return mySum;
}

function subtractNumbers(numberOne, numberTwo) {

let myDifference = numberOne - numberTwo;
return myDifference;
}

function multiplyNumbers(numberOne, numberTwo) {

let myProduct = numberOne * numberTwo;
return myProduct;
}

function divideNumbers(numberOne, numberTwo) {

let myQuotient = numberOne / numberTwo;
return myQuotient;
}   


// let sum = addNumbers(5, 10);
// let difference = subtractNumbers(10, 5);
// let product = multiplyNumbers(5, 10);
// let quotient = divideNumbers(10, 5);

// console.log(sum);
// console.log(difference);
// console.log(product);
// console.log(quotient);


const myButton = document.getElementById("button");
myButton.addEventListener("click",function() {
alert("You clicked the button!");

})