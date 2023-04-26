import { useStepForm } from '../../hooks/useStepForm'
import * as S from './styles'

export const Sidebar: React.FC = () => {
  const { steps } = useStepForm();

  return (
    <S.Container>
      {steps.map((step, i) => (
        <S.Step key={step.title}>
          <S.StepBullet>{i + 1}</S.StepBullet>
          <div>
            <S.StepCounter>STEP {i + 1}</S.StepCounter>
            <S.StepTitle>{step.title}</S.StepTitle>
          </div>
        </S.Step>
      ))}
    </S.Container>
  )
}