const operators = document.querySelector(".operators");

let num = "0";
let backupNum = 0;
let op = "";

operators.addEventListener("click", (event) => {
  const processOperation = (text) => {
    if (backupNum === 0) {
      backupNum = parseInt(num);
      op = text;

      num = "0";
      setSolutionText();
      return;
    }

    switch (op) {
      case "+":
        backupNum += parseInt(num);
        break;
      case "-":
        backupNum -= parseInt(num);
        break;
      case "*":
        backupNum *= parseInt(num);
        break;
      case "/":
        backupNum = Math.round(backupNum / parseInt(num));
        break;
    }

    if (text === "=") {
      num = `${backupNum}`;
      backupNum = 0;
      op = "";

      setSolutionText();
      return;
    } else {
      op = text;
      num = "0";
      setSolutionText();
    }
  };

  const processSpecialOperations = (text) => {
    switch (text) {
      case "C":
        num = "0";
        setSolutionText();
        break;
      case "<-":
        if (num.length > 1) num = num.slice(0, -1);
        setSolutionText();
        break;
    }
  };

  const processNumber = (text) => {
    num += text;
    if (num.charAt(0) === "0" && num.length > 1) {
      num = num.slice(1);
    }

    setSolutionText();
  };

  const setSolutionText = () => {
    const solution = document.querySelector(".solution");
    solution.innerText = num;
  };

  const operation = event.target.innerText;

  if (event.target.className.includes("operation-cell")) {
    processOperation(operation);
  } else if (isNaN(operation)) {
    processSpecialOperations(operation);
  } else {
    processNumber(operation);
  }

  event.stopPropagation();
});
