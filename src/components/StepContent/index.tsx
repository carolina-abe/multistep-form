import { useStepForm } from '../../hooks/useStepForm'

export const StepContent: React.FC = () => {
  const { currentStep } = useStepForm();

  return (
    <>
      {currentStep.content}
    </>
  )
}
