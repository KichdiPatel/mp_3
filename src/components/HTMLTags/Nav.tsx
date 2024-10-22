import { Link } from "react-router-dom";
import Header from "./Header.tsx";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: #8fc0a9;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
`;

const StyledUl = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const StyledLi = styled.li`
  margin: 10px 0;
  list-style: none;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #faf3dd;
  font-size: 1.4em;
`;

export default function Nav() {
  return (
    <StyledNav>
      <Header />
      <StyledUl>
        <StyledLi>
          <StyledLink to={`/`}>Home</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to={`/education`}>Education</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to={`/experience`}>Professional Experience</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to={`/crypto`}>Crypto Projects</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to={`/projects`}>Other Projects</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to={`/interests`}>Skills/Interests</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
}
