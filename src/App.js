import styled from "styled-components";

import Header from "./Components/Header";
import LatestNews from "./Components/LatestNews";
import Main from "./Components/Main";
import TopNews from "./Components/TopNews";



function App() {
  

  return (
    <Container>
      <Header />
      <TopRow>
        <Main />
        <LatestNews />
      </TopRow>
      <TopNews />
    </Container>
  );

}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  `;

const TopRow = styled.div`
    display: block;
    @media screen and (min-width: 1440px) {
      display: flex;
      column-gap: 30px;
    }
`;