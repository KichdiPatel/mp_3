import InfoBox from "./InfoBox";
import InfoBoxWrapper from "./InfoBoxWrapper";
import styled from "styled-components";

const StyledTitle = styled.h2`
  font-size: 4em;
  color: #8fc0a9;
  margin-bottom: 10px;
`;

export default function Interests() {
  return (
    <>
      <StyledTitle>Skills and Interests</StyledTitle>
      <InfoBoxWrapper>
        <InfoBox>
          <h3>Programming Languages</h3>
          <h4>
            Python(Intermediate), Java(Proficient), JavaScript, Assembly, C,
            Solidity
          </h4>
        </InfoBox>

        <InfoBox>
          <h3>Other Tools/Skills</h3>
          <h4>
            PostgreSQL, Git, ethers.js, Cloud Deployment, Microsoft
            Office(Excel, PowerPoint, Word)
          </h4>
        </InfoBox>

        <InfoBox>
          <h3>Interests</h3>
          <h4>
            Bhangra(BU Bhangra), Maximal Extractable Value(MEV), Photography,
            Basketball
          </h4>
        </InfoBox>
      </InfoBoxWrapper>
    </>
  );
}
