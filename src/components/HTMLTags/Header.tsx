import styled from "styled-components";

//Create the styled components that will be used to handle elements in the header
const HeaderWrapper = styled.header`
  text-align: center;
  background-color: #8fc0a9;
`;

const StyledImage = styled.img`
  display: block;
  margin: 0 auto 20px;
  max-width: 200px;
  max-height: 200px;
  width: 100%;
  border-radius: 50%;
  border: 4px solid #faf3dd;

  @media screen and (max-width: 750px) {
    display: block;
    margin: 0 auto 20px;
    max-width: 100px;
    max-height: 100px;
    width: 100%;
    border-radius: 50%;
    border: 4px solid #faf3dd;
  }
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #faf3dd;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #faf3dd;
  margin-bottom: 20px;
`;

const Contact = styled.h4`
  color: #faf3dd;
  a {
    color: #faf3dd;
  }
`;

// Header Component including: headshot, website title, subtitle, email, and linkedin
export default function Header() {
  return (
    <HeaderWrapper>
      <StyledImage src="/assets/headshot.jpg" alt="Ayan Headshot" />
      <Title>Ayan Patel's Resume</Title>
      <Subtitle>My Online Formatted Resume</Subtitle>
      <Contact>
        acpatel@bu.edu
        <span> | </span>
        <a
          href="https://www.linkedin.com/in/apatel2"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </Contact>
    </HeaderWrapper>
  );
}
