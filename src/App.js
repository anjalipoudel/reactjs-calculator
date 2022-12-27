import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [result, setResult] = useState("");
  const [calculated, setCalculated] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (
      result[result.length - 1] === "+" ||
      result[result.length - 1] === "-" ||
      result[result.length - 1] === "*" ||
      result[result.length - 1] === "/"
    )
      setIsDisabled(true);
    else setIsDisabled(false);
  }, [result]);
  const handleclick = (e) => {
    if (
      e.target.name === "+" ||
      e.target.name === "-" ||
      e.target.name === "*" ||
      e.target.name === "/"
    )
      setResult(result.concat(e.target.name));
    else {
      if (calculated) setResult(e.target.name);
      else setResult(result.concat(e.target.name));
    }
    setCalculated(false);

    if (
      e.target.name === "+" ||
      e.target.name === "-" ||
      e.target.name === "/" ||
      e.target.name === "*"
    )
      setIsDisabled("");
  };
  const clear = () => {
    setResult("");
  };
  const backspace = () => {
    let clearResult = result;
    let resultLength = clearResult.length;
    let slicedResult = clearResult.slice(0, resultLength - 1);
    setResult(slicedResult);
  };
  const equal = () => {
    let newResult = result;
    let equalResult = String(eval(newResult));
    setResult(equalResult);
    setCalculated(true);
  };
  return (
    <>
      <section class="calculator">
        <form>
          <input type="text" class="screen" value={result} id="screen" />
        </form>
        <div class="buttons">
          <button
            onClick={handleclick}
            name="*"
            type="button"
            disabled={isDisabled}
            class={
              isDisabled ? `btn  btn-symbol btn-disabled` : `btn  btn-symbol`
            }
          >
            X
          </button>
          <button
            onClick={handleclick}
            disabled={isDisabled}
            type="button"
            class={
              isDisabled ? `btn  btn-symbol btn-disabled` : `btn  btn-symbol`
            }
            name="/"
          >
            /
          </button>
          <button
            onClick={handleclick}
            type="button"
            disabled={isDisabled}
            class={
              isDisabled ? `btn  btn-symbol btn-disabled` : `btn  btn-symbol`
            }
            name="+"
          >
            +
          </button>
          <button
            onClick={handleclick}
            type="button"
            disabled={isDisabled}
            class={
              isDisabled ? `btn  btn-symbol btn-disabled` : `btn  btn-symbol`
            }
            name="-"
          >
            -
          </button>
          <button
            onClick={handleclick}
            type="button"
            class=" btn  btn-num"
            name="6"
          >
            6
          </button>
          <button
            onClick={handleclick}
            type="button"
            class=" btn  btn-num"
            name="7"
          >
            7
          </button>
          <button
            onClick={handleclick}
            type="button"
            class=" btn  btn-num"
            name="8"
          >
            8
          </button>
          <button
            onClick={handleclick}
            type="button"
            class=" btn  btn-num"
            name="9"
          >
            9
          </button>
          <button
            onClick={handleclick}
            type="button"
            class=" btn  btn-num"
            name="2"
          >
            2
          </button>
          <button
            onClick={handleclick}
            type="button"
            class=" btn  btn-num"
            name="3"
          >
            3
          </button>
          <button
            onClick={handleclick}
            type="button"
            class=" btn  btn-num"
            name="4"
          >
            4
          </button>
          <button
            onClick={handleclick}
            type="button"
            class=" btn  btn-num"
            name="5"
          >
            5
          </button>
          <button
            onClick={handleclick}
            type="button"
            class=" btn  btn-num"
            name="1"
          >
            1
          </button>
          <button
            onClick={handleclick}
            type="button"
            class=" btn  btn-num"
            name="0"
          >
            0
          </button>
          <button
            onClick={handleclick}
            type="button"
            class=" btn  btn-num"
            name="."
          >
            .
          </button>
          <button
            onClick={equal}
            type="button"
            class=" btn  btn-equal"
            name="="
          >
            =
          </button>
          <button
            onClick={backspace}
            type="button"
            class=" btn  btn-delete"
            name="C"
            id="Backspace"
          >
            Clear
          </button>
          <button
            onClick={clear}
            type="button"
            class=" btn  btn-clear"
            name="Clear"
          >
            AC
          </button>
        </div>
      </section>
      <footer class="footer-text">
        Crafted with ❤️ by
        <a href="https://github.com/anjalipoudel/"> Anjali Poudel</a>
      </footer>
    </>
  );
}