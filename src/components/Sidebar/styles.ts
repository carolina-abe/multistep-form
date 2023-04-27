import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const Container = styled.div`
  width: 50%;
  min-height: 330px;
  background-color: ${colors.purplish};
  border-radius: 4px;
  padding: 15px 10px; 
`

export const Step = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  width: 100%;

  div {
    display: flex;
    flex-direction: column; 
  }
`

export const StepCounter = styled.span`
  font-size: 12px;
  font-weight: normal;
  color: ${colors.gray};
`

export const StepTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.white};
  margin: 0;
`

type StepBulletProps = {
  isSelected: boolean
}

export const StepBullet = styled.div<StepBulletProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isSelected }) => isSelected ? colors.lightBlue : 'transparent'};
  color: ${({ isSelected }) => isSelected ? colors.marine : colors.white};
  border: ${({ isSelected }) => isSelected ? 'none' : `1px solid ${colors.white}`};
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 5px;
  font-size: 12px;
  font-weight: 400;
`