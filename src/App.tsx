import {
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";

import styled from "styled-components";

import Nav from "./components/HTMLTags/Nav.tsx";
import Home from "./components/Pages/Home.tsx";
import Education from "./components/Pages/Education.tsx";
import Experience from "./components/Pages/Experience.tsx";
import Crypto from "./components/Pages/Crypto.tsx";
import Interests from "./components/Pages/Interests.tsx";
import Projects from "./components/Pages/Projects.tsx";
import Footer from "./components/HTMLTags/Footer.tsx";
import Main from "./components/HTMLTags/Main.tsx";

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: row;
  font-family: "Playfair Display", serif;
  font-size: calc(10px + 0.2vw);
  background-color: #faf3dd;
  line-height: 1.6;

  @media screen and (max-width: 750px) {
    display: flex;
    flex-direction: column;
  }
`;

const Wrapper2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.main`
  flex: 1;
  // padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  width: 70%;
  margin: auto;

  @media screen and (max-width: 750px) {
    width: 100%;
    padding: 20px;
    flex-direction: column;
  }
`;

function Root() {
  return (
    <Wrapper>
      <Nav />
      <Wrapper2>
        <StyledMain>
          <Main />
          <Routes>
            <Route path={`/`} element={<Home />} />
            <Route path={`/education`} element={<Education />} />
            <Route path={`/experience`} element={<Experience />} />
            <Route path={`/crypto`} element={<Crypto />} />
            <Route path={`/projects`} element={<Projects />} />
            <Route path={`/interests`} element={<Interests />} />
          </Routes>
        </StyledMain>
        <Footer />
      </Wrapper2>
    </Wrapper>
  );
}

const router = createBrowserRouter([{ path: "*", Component: Root }]);
export default function App() {
  return <RouterProvider router={router} />;
}
