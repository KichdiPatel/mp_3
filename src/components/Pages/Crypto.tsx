import InfoBox from "../HelperElems/InfoBox";
import styled from "styled-components";
import PageTitle from "../HelperElems/PageTitle";


const StyledWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;

// Page that discusses Crypto Related Projects I have worked on
export default function Crypto() {
  return (
    <>
      <PageTitle title="Crypto Projects" />
      <StyledWrapper>
        <InfoBox>
          <h3>Arbitrage Trading Bot</h3>
          <h4>Python</h4>
          <h4>April 2024 - May 2024</h4>
          <ul>
            <li>
              <p>
                Designed a bot in python to automate leveraged trades in Aevo’s
                perpetuals exchange to gain airdrop eligibility.
              </p>
            </li>
            <li>
              <p>
                Utilized strategy to build $2000+ volume per day per wallet
                across 3 wallets with only $120 and leveraged trades.
              </p>
            </li>
          </ul>
        </InfoBox>

        <InfoBox>
          <h3>Friend.tech Data Collection</h3>
          <h4>Python</h4>
          <h4>October 2023 - November 2023</h4>
          <ul>
            <li>
              <p>
                Built a method in python for collecting data on Friend.tech’s
                new users through blockchain data, and API data to potentially
                analyze relationship between twitter activity, and Friend.tech
                key pricing for new users.
              </p>
            </li>
            <li>
              <p>
                Established each observation to be a new user sign up, with
                variables like twitter account, follower count, lifetime tweets,
                Friend.tech key price, and more.
              </p>
            </li>
          </ul>
        </InfoBox>
      </StyledWrapper>
    </>
  );
}
