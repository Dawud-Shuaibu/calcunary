import StandardEngine from "../../engines/standard";
import "../../assets/css/calcs/standard.css";

const Standard = () => {
  const { stateRef, displayRef, inputCollector } = StandardEngine();

  return (
    <main className="standard-main">
      {/* Showing the state of ongoing and processed calculations */}
      <div className="calc-screen-box">
        <p className="calc-state" ref={stateRef}></p>
        <p
          className="display"
          inputMode="none"
          spellCheck="false"
          autoCorrect="off"
          autoCapitalize="off"
          ref={displayRef}
        >
          0
        </p>
      </div>
      <div className="buttons-box">
        <button className="CE" value="CE" onClick={() => inputCollector("CE")}>
          CE
        </button>
        <button className="clear" value="C" onClick={() => inputCollector("C")}>
          C
        </button>
        <button
          className="delete"
          value="Backspace"
          onClick={() => inputCollector("delete")}
        >
          Del
        </button>
        <button className="nine" value="9" onClick={() => inputCollector(9)}>
          9
        </button>
        <button className="eight" value="8" onClick={() => inputCollector(8)}>
          8
        </button>
        <button className="seven" value="7" onClick={() => inputCollector(7)}>
          7
        </button>
        <button className="six" value="6" onClick={() => inputCollector(6)}>
          6
        </button>
        <button className="five" value="5" onClick={() => inputCollector(5)}>
          5
        </button>
        <button className="four" value="4" onClick={() => inputCollector(4)}>
          4
        </button>
        <button className="three" value="3" onClick={() => inputCollector(3)}>
          3
        </button>
        <button className="two" value="2" onClick={() => inputCollector(2)}>
          2
        </button>
        <button className="one" value="1" onClick={() => inputCollector(1)}>
          1
        </button>
        <button className="zero" value="0" onClick={() => inputCollector(0)}>
          0
        </button>
        <button className="point" value="." onClick={() => inputCollector(".")}>
          .
        </button>
        <button
          className="divide"
          value="/"
          onClick={() => inputCollector("/")}
        >
          /
        </button>
        <button
          className="multiply"
          value="*"
          onClick={() => inputCollector("*")}
        >
          *
        </button>
        <button
          className="subtract"
          value="-"
          onClick={() => inputCollector("-")}
        >
          -
        </button>
        <button className="add" value="+" onClick={() => inputCollector("+")}>
          +
        </button>
        <button
          type="submit"
          className="equal"
          value="="
          onClick={() => inputCollector("=")}
        >
          =
        </button>
      </div>
    </main>
  );
};

export default Standard;
