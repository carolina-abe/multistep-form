import { Sidebar } from "../components/Sidebar";
import { MainContainer } from "../styles/container";
import GlobalStyle from "../styles/globalStyles";

function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <Sidebar steps={[
        { description: 'YOUR INFO' },
        { description: 'SELECT PLAN' },
        { description: 'ADD-ONS' },
        { description: 'SUMMARY' },
      ]}/>
    </MainContainer>
  )
}

export default App;
