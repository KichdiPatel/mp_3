import styled from "styled-components";
import PageTitle from "../HelperElems/PageTitle";

const StyledImage = styled.img`
  display: block;
  max-width: 500px;
`;

const StyledText = styled.p`
  font-size: 1.1em;
  margin-bottom: 20px;
  text-align: justify;
`;

export default function Home() {
  return (
    <>
      <PageTitle title="About Me" />
      <StyledImage src="../../assets/buLogo.png" alt="BU Logo" />
      <StyledText>
        I am currently a third year undergraduate student studying Computer
        Science with a minor in Business Administration. Finance fascinates me
        including its interactions with technology, and I am looking for
        opportunities to explore this interest. With experience since a young
        kid with computer science and creating businesses, I have learned to
        love problem solving and stay curious to new ideas. My previous
        experience over my first and second internships at Deloitte has allowed
        me the unique opportunity to collaborate with teams across the country,
        and apply these problem solving skills. Constantly, I look for ways to
        refine these skills through external coding or research projects in
        cryptocurrency markets and business applications. I am currently looking
        for a challenging environment to apply this passion for technology
        towards unique challenges in a rapidly evolving environments.
      </StyledText>
    </>
  );
}
