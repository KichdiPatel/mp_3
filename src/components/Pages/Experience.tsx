import InfoBox from "../HelperElems/InfoBox";
import styled from "styled-components";
import PageTitle from "../HelperElems/PageTitle";

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;

//Page that discusses my Professional Experience
export default function Experience() {
  return (
    <>
      <PageTitle title="Professional Experience" />
      <StyledWrapper>
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
      </StyledWrapper>
    </>
  );
}
