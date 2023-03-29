import { useContext } from "react"
import StepFormContext from "../contexts/StepFormContext"

export const useStepForm = () => {
  const context = useContext(StepFormContext)

  if (!context) {
    throw new Error("You have to use `useStepForm()` inside a <StepFormProvider />")
  }

  return context
}