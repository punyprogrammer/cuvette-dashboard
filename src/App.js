import "./App.css";
import styled from "styled-components";
import Topbar from "./components/Topbar";
import LeftBar from "./components/LeftBar";
import CenterBar from "./components/CenterBar";
import RightBar from "./components/RightBar";

const AppContainer = styled.div`

`;
const ContentContainer=styled.div`
    display:flex;
`
function App() {
  return (

      <AppContainer>

      <Topbar />
      <ContentContainer>
        <LeftBar />
        <CenterBar />
        <RightBar />
      </ContentContainer>
      </AppContainer>
   
  );
}

export default App;
