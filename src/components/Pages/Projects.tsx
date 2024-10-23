import InfoBox from "../HelperElems/InfoBox";
import styled from "styled-components";
import { useState } from "react";
import PageTitle from "../HelperElems/PageTitle";

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;

const Calculator = styled.div`
  display: flex;
  flex-direction: column;
`;

const CalcButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const CalcInput = styled.input`
  margin: 10px;
  padding: 5px;
  width: 100px;
`;

const StyledButton = styled.button`
  margin: 5px;
  padding: 10px;
  width: 100%;
`;

const Output = styled.h3`
  font-size: 1em;
  margin-top: 20px;
`;

export default function Projects() {
  // Using useState to define variables that I can use for the calculations
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState<string | number>("");
  const [isNeg, setIsNeg] = useState(false);

  // This clears the calculators inputs
  function clearCalc() {
    setFirstNumber("");
    setSecondNumber("");
    setResult("");
    setIsNeg(false);
  }

  // There is one function to check for +, -, *, /, and **
  function calculate(operation: string) {
    const first = Number(firstNumber);
    const second = Number(secondNumber);
    let calcOutput;
    switch (operation) {
      case "addition":
        calcOutput = first + second;
        break;

      case "subtraction":
        calcOutput = first - second;
        break;

      case "multiplication":
        calcOutput = first * second;
        break;

      case "division":
        if (second != 0) {
          calcOutput = first / second;
        } else {
          calcOutput = "Cannot divide by zero";
        }
        break;

      case "power": {
        let total = 1;
        for (let i = 0; i < second; i++) {
          total *= first;
        }
        calcOutput = total;
        break;
      }

      default:
        calcOutput = 0;
        break;
    }

    setResult(calcOutput);

    if (typeof calcOutput === "number" && calcOutput < 0) {
      setIsNeg(true);
    } else {
      setIsNeg(false);
    }
  }

  return (
    <>
      <PageTitle title="Other Projects" />
      <StyledWrapper>
        <InfoBox>
          <Calculator>
            <h3>Calculator</h3>

            <div>
              <CalcInput
                type="text"
                value={firstNumber}
                onChange={(e) => setFirstNumber(e.target.value)}
                placeholder="1st num"
              />
              <CalcInput
                type="text"
                value={secondNumber}
                onChange={(e) => setSecondNumber(e.target.value)}
                placeholder="2nd num"
              />
            </div>

            <CalcButtons>
              <StyledButton onClick={() => calculate("addition")}>
                {" "}
                +{" "}
              </StyledButton>
              <StyledButton onClick={() => calculate("subtraction")}>
                {" "}
                -{" "}
              </StyledButton>
              <StyledButton onClick={() => calculate("multiplication")}>
                {" "}
                *{" "}
              </StyledButton>
              <StyledButton onClick={() => calculate("division")}>
                {" "}
                /{" "}
              </StyledButton>
              <StyledButton onClick={() => calculate("power")}>
                {" "}
                **{" "}
              </StyledButton>
              <StyledButton onClick={() => clearCalc()}>Clear</StyledButton>
            </CalcButtons>
            <Output
              style={{
                color: isNeg ? "red" : "black",
              }}
            >
              {result}
            </Output>
          </Calculator>
        </InfoBox>

        <InfoBox>
          <h3>Craigslist To eBay Arbitrage – Web Scraper</h3>
          <h4>Python</h4>
          <h4>November 2023 - February 2024</h4>
          <ul>
            <li>
              <p>
                Transitioned ecommerce flipping business to automated Craigslist
                inventory sourcing strategy through use of web scraped listings,
                ChatGPT API analysis and cross check with eBay sold listings for
                profitability.
              </p>
            </li>
            <li>
              <p>
                Overcame challenges regarding Craigslist web scraping defenses
                to continue to search for profitable listings.
              </p>
            </li>
          </ul>
        </InfoBox>
      </StyledWrapper>
    </>
  );
}
