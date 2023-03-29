import styled from 'styled-components'
import { colors} from '../../styles/theme'

export const Container = styled.div`
  width: 200px;
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
  font-weight: 700;
  color: ${colors.white};
  margin: 0;
`

export const StepBullet = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lightBlue};
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 2px;
  font-size: 12px;
  font-weight: 700;

  &.active {
    border: 1px ${colors.white};
    background-color: transparent;
  }
`