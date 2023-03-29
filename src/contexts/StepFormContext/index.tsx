import { createContext, useState, useCallback } from 'react'
import { Step, Steps } from '../../types/step'

type StepFormContext = {
  steps: Steps
  currentStep: Step
  nextStep: () => void
  previousStep: () => void
}

type StepFormProvider = {
  children: React.ReactNode
}

const StepFormContext = createContext<StepFormContext | null>(null)

export const StepFormProvider = ({ children }: StepFormProvider) => {
  const defaultSteps = [
    { description: 'YOUR INFO', content: <h1>Your info</h1> },
    { description: 'SELECT PLAN', content: <h1>Select plan</h1> },
    { description: 'ADD-ONS', content: <h1>Addons</h1> },
    { description: 'SUMMARY', content: <h1>Summary</h1> },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  
  const nextStep = useCallback(() => {
    const nextIndex = currentIndex + 1

    if (nextIndex <= defaultSteps.length - 1) {
      setCurrentIndex(nextIndex)
    }
    
  }, [currentIndex])

  const previousStep = useCallback(() => {
    const previousIndex = currentIndex - 1

    if (previousIndex >= 0) {
      setCurrentIndex(previousIndex)
    }
    
  }, [currentIndex])

  const currentStep = defaultSteps[currentIndex]

  return (
    <StepFormContext.Provider
      value={{
        steps: defaultSteps,
        currentStep,
        nextStep,
        previousStep
      }}>
      {children}
    </StepFormContext.Provider>
  )
}

export default StepFormContext