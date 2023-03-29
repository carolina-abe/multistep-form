import { StepFormProvider } from "../contexts/StepFormContext"
import { Sidebar } from "../components/Sidebar"
import { StepContent } from "../components/StepContent"

import { MainContainer } from "../styles/container"
import GlobalStyle from "../styles/globalStyles"

function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <StepFormProvider>
        <Sidebar />
        <StepContent />
      </StepFormProvider>
    </MainContainer>
  )
}

export default App;
