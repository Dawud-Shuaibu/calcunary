import { useRef, useEffect } from "react";

const StandardEngine = () => {
  const stateRef = useRef(null);
  const displayRef = useRef(null);

  // CALCULATION VALUES AND STATE HOLDERS
  let firstNum = 0;
  let secondNum = 0;
  let calcType = null;
  let calcCompleted = false;

  const operator = {
    addition: (a, b) => {
      return a + b;
    },
    subtract: (a, b) => {
      return a - b;
    },
    multiply: (a, b) => {
      return a * b;
    },
    divide: (a, b) => {
      return b === 0 ? "Error" : a / b;
    },
  };

  const symbols = {
    addition: "+",
    subtract: "-",
    multiply: "*",
    divide: "/",
  };

  // RESETS THE CALCULATOR FOR NEW OPERATION
  function reset() {
    stateRef.current.innerText = "";
    displayRef.current.innerText = "0";
    firstNum = 0;
    secondNum = 0;
    calcType = null;
    calcCompleted = false;
  }

  // SET TARGET OPERATION TYPE AND HANDLE CHAINING CALCULATION
  function chainSolver(oprtType) {
    if (firstNum !== null && calcType !== null) {
      if (calcCompleted === true) displayRef.current.innerText = "";
      else {
        firstNum = operator[calcType](
          firstNum,
          Number(displayRef.current.innerText),
        );
        if (firstNum === "Error") firstNum = 0;
      }
    } else {
      firstNum = Number(displayRef.current.innerText);
    }

    stateRef.current.innerText = `${firstNum} ${symbols[oprtType]} `;
    displayRef.current.innerText = "0";
    secondNum = 0;
    calcType = oprtType;
    calcCompleted = false;
  }

  // TOTAL SOLVER - WHEN THE EQUAL BUTTON IS CLICKED OR PRESSED
  function solver() {
    if (calcType === null) return;
    if (secondNum === 0) secondNum = Number(displayRef.current.innerText);
    else firstNum = Number(displayRef.current.innerText);
    if (displayRef.current.innerText === "0") secondNum = firstNum;

    const result = operator[calcType](firstNum, secondNum);
    const resultString = String(result);

    stateRef.current.innerText = `${firstNum} ${symbols[calcType]} ${secondNum}`;

    try {
      switch (result) {
        case "Error":
          throw new Error(`Can't divide by 0`);
        default:
          if (resultString.length > 16)
            displayRef.current.innerText = resultString.slice(0, 16);
          else displayRef.current.innerText = resultString;
          break;
      }
    } catch (error) {
      stateRef.current.innerText = error;
      displayRef.current.innerText = "0";
    }

    calcCompleted = true;
    firstNum = Number(displayRef.current.innerText);
  }

  const inputCollector = (input) => {
    const display = displayRef.current;

    if (typeof input === "number" || input === ".") {
      if (
        display.innerText.length < 16 ||
        ((display.innerText.length === 16) & display.innerText.includes(".") &&
          input !== ".")
      ) {
        if (input === 0 && display.innerText !== "0")
          display.innerText += input;
        else if (input === "." && !display.innerText.includes("."))
          if (display.innerText === "") display.innerText = "0.";
          else display.innerText += input;
        else if (input !== 0 && input !== ".") {
          if (display.innerText === "0") display.innerText = "";
          display.innerText += input;
        }
      }
    } else if (
      input === "/" ||
      input === "*" ||
      input === "-" ||
      input === "+"
    ) {
      const operatorName = (operSign) => {
        if (operSign === "/") return "divide";
        else if (operSign === "*") return "multiply";
        else if (operSign === "-") return "subtract";
        else if (operSign === "+") return "addition";
      };
      chainSolver(operatorName(input));
    } else if (input === "=") solver();
    else if (input === "CE" || input === "C" || input === "delete") {
      switch (input) {
        case "CE":
          display.innerText = "0";
          break;
        case "C":
          reset();
          break;
        default:
          if (display.innerText.length === 1) display.innerText = "0";
          else display.innerText = display.innerText.slice(0, -1);
      }
    } else return;
  };

  // KEYBOARD SHORTCUTS MAPPINGS
  useEffect(() => {
    const shortcutsHandler = (event) => {
      if (!isNaN(Number(event.key))) inputCollector(Number(event.key));
      else {
        switch (event.key) {
          case "X":
          case "x":
            inputCollector("CE");
            break;
          case "c":
            inputCollector("C");
            break;
          case "Backspace":
            inputCollector("delete");
            break;
          case "Enter":
            event.preventDefault();
            inputCollector("=");
            break;
          default:
            inputCollector(event.key);
        }
      }
    };

    document.addEventListener("keydown", shortcutsHandler);

    return () => {
      document.removeEventListener("keydown", shortcutsHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { stateRef, displayRef, inputCollector };
};

export default StandardEngine;
