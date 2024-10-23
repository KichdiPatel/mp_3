import styled from "styled-components";
import { TitleProps } from "./types";

//General Styled Title that I use on every page
const StyledTitle = styled.h2`
  font-size: 4em;
  color: #8fc0a9;
  margin-bottom: 10px;
  text-align: center;
`;

export default function Title({ title }: TitleProps) {
  return <StyledTitle>{title}</StyledTitle>;
}
