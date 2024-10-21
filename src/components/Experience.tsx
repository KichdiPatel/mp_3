import InfoBox from "./InfoBox";
import InfoBoxWrapper from "./InfoBoxWrapper";
import styled from "styled-components";

const StyledTitle = styled.h2`
  font-size: 4em;
  color: #8fc0a9;
  margin-bottom: 10px;
`;

export default function Experience() {
  return (
    <>
      <StyledTitle>Professional Experience</StyledTitle>
      <InfoBoxWrapper>
        <InfoBox>
          <h3>Deloitte</h3>
          <h4>Discovery 2 Intern</h4>
          <h4>Boston, MA | June 2024 - August 2024</h4>
          <ul>
            <li>
              <p>
                Studied the clients’ pain points and spoke with professionals at
                the firm clarifying these weaknesses to develop recommended
                solutions and a final presentation.
              </p>
            </li>
            <li>
              <p>
                Researched potential ESG credits and incentives that can apply
                to client’s business practices and delivered a final
                presentation to pitch Deloitte’s ESG-specific tax services.
              </p>
            </li>
          </ul>
        </InfoBox>

        <InfoBox>
          <h3>Deloitte</h3>
          <h4>Discovery 1 Intern</h4>
          <h4>Boston, MA | June 2023 - July 2023</h4>
          <ul>
            <li>
              <p>
                Analyzed two potential acquisitions for a given client and
                structured a proposal for teams’ recommendation considering the
                client’s current issues and goals.
              </p>
            </li>
            <li>
              <p>
                Collaborated closely with teams of 7-10 coworkers through daily
                meetings to complete assigned deliverables exploring the various
                service lines, brainstorming solutions, and creating two final
                presentations.
              </p>
            </li>
          </ul>
        </InfoBox>
      </InfoBoxWrapper>
    </>
  );
}
