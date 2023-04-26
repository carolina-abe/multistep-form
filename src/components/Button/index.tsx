import * as S from './styles'
import { ButtonProps } from "./types"

export const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <S.Button type="submit" className={className}>
      {children}
    </S.Button>
  )
}