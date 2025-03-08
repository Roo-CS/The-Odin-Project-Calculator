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
    case(operator == "+"):
      return Add(a, b);
    case(operator == "-"):
      return Subtract(a, b);
    case(operator == "*"):
      return Multiply(a, b);
    case(operator == "/"):
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
      displayElement.textContent = "";
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
    //case "=":
      
    default:
      if (!isNaN(keyPress)) displayElement.textContent += keyPress;
      break;
  }
}

CreateButtons();