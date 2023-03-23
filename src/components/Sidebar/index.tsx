import { SidebarProps } from "./types";
import * as S from './styles'

export const Sidebar: React.FC<SidebarProps> = ({ steps }) => {
  return (
    <S.Container>
      {steps.map((step, i) => (
        <S.Step key={step.description}>
          STEP {i + 1}
          {step.description}
        </S.Step>
      ))}
    </S.Container>
  )
}