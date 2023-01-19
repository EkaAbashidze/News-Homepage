import styled from "styled-components";

import Header from "./Components/Header";
import LatestNews from "./Components/LatestNews";
import Main from "./Components/Main";
import TopNews from "./Components/TopNews";

function App() {
  return (
    <Container>
      <Header/>
      <Main />
      <LatestNews/>
      <TopNews/>
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
`