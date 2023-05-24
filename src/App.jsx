import { useState, useEffect } from "react";
import { Advice } from "./components/Advice";
import dice from "./assets/images/icon-dice.svg";
import dividerDesktop from "./assets/images/pattern-divider-desktop.svg";
import dividerMobile from "./assets/images/pattern-divider-mobile.svg";
import "./style.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [adviceNumber, setAdviceNumber] = useState(0);
  const [showAdvice, setShowAdvice] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const getAdvice = async () => {
    setShowAdvice(false);
    setButtonDisabled(true);
    if (buttonDisabled) {
      return;
    }

    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
      setAdviceNumber(data.slip.id);
      setShowAdvice(true);
    } catch (error) {
      console.log("Error fetching advice:", error);
    } finally {
      // After advice is fetched wait 2 seconds before allowing button to be clicked again so it doesnt show same advice twice after clicking
      setTimeout(() => {
        setButtonDisabled(false);
      }, 2000);
    }
  };

  // When site first loads fetch advice to prevent it being empty
  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      <main>
        <div className="container">
          <Advice
            showAdvice={showAdvice}
            adviceNumber={adviceNumber}
            advice={advice}
          />

          <picture>
            <source
              className="divider"
              srcSet={dividerDesktop}
              media="(min-width: 500px)"
            />
            <img className="divider" src={dividerMobile} alt="" />
          </picture>

          <button
            aria-controls="generateButton"
            className="button"
            onClick={() => getAdvice()}
            disabled={buttonDisabled}
          >
            <span className="visually-hidden">Generate new advice</span>
            <img
              aria-label="Generate new advice"
              src={dice}
              alt="Change"
              id="generateButton"
              className="dice"
            />
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
