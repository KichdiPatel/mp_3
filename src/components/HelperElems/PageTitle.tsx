import styled from "styled-components";
import { TitleProps } from "./types";

const StyledTitle = styled.h2`
  font-size: 4em;
  color: #8fc0a9;
  margin-bottom: 10px;
`;

export default function Title({ title }: TitleProps) {
  return <StyledTitle>{title}</StyledTitle>;
}
