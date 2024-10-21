import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;

export default function InfoBoxWrapper(props) {
  return <StyledDiv>{props.children}</StyledDiv>;
}
