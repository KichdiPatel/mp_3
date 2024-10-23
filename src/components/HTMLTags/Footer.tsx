import styled from "styled-components";

// Created Footer component to reduce code verbosity

const StyledFooter = styled.footer`
  width: 100%;
  text-align: left;
  padding: 20px;
  background-color: #faf3dd;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        All rights reserved: <a href="#">Credits</a> &#169;
      </p>
    </StyledFooter>
  );
}
