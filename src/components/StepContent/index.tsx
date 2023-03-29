import { useStepForm } from '../../hooks/useStepForm'

export const StepContent: React.FC = () => {
  const { currentStep, nextStep, previousStep } = useStepForm();

  return (
    <>
      {currentStep.content}
      <button onClick={previousStep}>PREVIOUS</button>
      <button onClick={nextStep}>NEXT</button>
    </>
  )
}