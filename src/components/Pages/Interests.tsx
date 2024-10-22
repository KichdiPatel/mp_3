import InfoBox from "../HelperElems/InfoBox";
import styled from "styled-components";
import PageTitle from "../HelperElems/PageTitle";

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;

export default function Interests() {
  return (
    <>
      <PageTitle title="Skills and Interests" />
      <StyledWrapper>
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
      </StyledWrapper>
    </>
  );
}
