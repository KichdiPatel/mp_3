import styled from "styled-components";
import { InfoBoxProps } from "./types";

// Setting up a styled div that can be used for any InfoBox regardless of order of the inner HTML elements

const StyledDiv = styled.div`
  background-color: #c8d5b9;
  padding: 30px;
  border-radius: 40px;
  margin-bottom: 30px;

  p {
    font-size: 1.1em;
    margin-bottom: 20px;
    text-align: justify;
  }

  h2 {
    font-size: 4em;
    color: #8fc0a9;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 2em;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 1.4em;
    margin: 5px 0;
    font-weight: normal;
  }
`;

// Using Props to pass in the other elements 
export default function InfoBox({ children }: InfoBoxProps) {
  return <StyledDiv>{children}</StyledDiv>;
}
