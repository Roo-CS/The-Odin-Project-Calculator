function Add(a, b){
  return a + b;
}

function Subtract(a, b){
  return a - b;
}

function Multiply(a, b){
  return a * b;
}

function Divide(a, b){
  if(b == 0){
    return NaN;
  }

  return a / b;
}

function Operate(operator, a, b){
  switch(operator){
    case "+":
      return Add(a, b);
    case "-":
      return Subtract(a, b);
    case "*":
      return Multiply(a, b);
    case "/":
      return Divide(a, b);
  }
}

function CreateButtons(){
  let buttonContainer = document.querySelector(".button-container");
  let buttonTexts = [
    "AC", "+/-", "%", "/",
     7, 8, 9, "*", 
     4, 5, 6, "-", 
     1, 2, 3, "+",
    0, ".", "="];
  buttonTexts.forEach(text => {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add('button');
    
    if(button.textContent == 0) button.style.width = '200px';

    button.addEventListener('click', () => {
      let keyPress = button.textContent;
      changeDisplay(keyPress);
    })

    buttonContainer.appendChild(button);
  });
}

function changeDisplay(keyPress){
  let displayElement = document.querySelector(".calculator-display");

  switch(keyPress){
    case "AC":
      displayElement.textContent = "0";
      a = null;
      b = null;
      operator = null;
      aCheck = false;
      break;
    case "+/-":
      var displayNum = +displayElement.textContent;
      displayNum *= -1;
      displayElement.textContent = String(displayNum);
      break;
    case "%":
      var displayNum = +displayElement.textContent;
      displayNum /= 100;
      displayElement.textContent = String(displayNum);
      break;
    case "-":
    case "+":
    case "*":
    case "/":
      operator = keyPress;
      a = +displayElement.textContent;
      aCheck = true;
      break;
    case "=":
      console.log(`${operator} ${a} ${+displayElement.textContent}`);
      displayElement.textContent = Operate(operator, a, +displayElement.textContent);
      operator = null;
      a = +displayElement.textContent;
      b = null;
      aCheck = true;
      break;
    default:
      if(!isNaN(keyPress)){
        if(displayElement.textContent === '0' || aCheck){
          displayElement.textContent = keyPress;
          aCheck = false;
        }else{
          displayElement.textContent += keyPress;
        }
      }
      break;
  }
}

let operator = null;
let a = null;
let aCheck = false;
let b = null;

CreateButtons();