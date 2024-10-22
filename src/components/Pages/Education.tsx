import InfoBox from "../HelperElems/InfoBox";
import styled from "styled-components";
import PageTitle from "../HelperElems/PageTitle";

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;

export default function Education() {
  return (
    <>
      <PageTitle title="Education" />
      <StyledWrapper>
        <InfoBox>
          <h3>Boston University College of Arts and Sciences</h3>
          <h4>Boston, MA</h4>
          <h4>Bachelor of Arts in Computer Science</h4>
          <h4>Graduation Date: May 2026</h4>
          <h4>Minor: Business Administration</h4>
          <h4>Cumulative GPA: 3.91/4.0</h4>
        </InfoBox>

        <InfoBox>
          <h3>Princeton High School</h3>
          <h4>Princeton, NJ</h4>
          <h4>High School Diploma</h4>
          <h4>Graduation Date: June 2022</h4>
        </InfoBox>
      </StyledWrapper>
    </>
  );
}
