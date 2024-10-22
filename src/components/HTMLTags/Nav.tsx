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

  @media screen and (max-width: 750px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const StyledUl = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
  }
`;

const StyledLi = styled.li`
  margin: 10px 0;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 750px) {
    list-style: none;
    margin: 0 10px;
    padding: 0;
  }
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
