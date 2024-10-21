import InfoBox from "./InfoBox";
import InfoBoxWrapper from "./InfoBoxWrapper";
import styled from "styled-components";

const StyledTitle = styled.h2`
  font-size: 4em;
  color: #8fc0a9;
  margin-bottom: 10px;
`;

export default function Education() {
  return (
    <>
      <StyledTitle>Education</StyledTitle>
      <InfoBoxWrapper>
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
      </InfoBoxWrapper>
    </>
  );
}
