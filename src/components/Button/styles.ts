import styled from "styled-components"
import { colors } from "../../styles/theme"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 6px;
  background-color: ${colors.marine};
  color: #fff;
  cursor: pointer;
  transition: all 0.3s linear;


  &.previous {
    color: black;
    background: transparent;
  }

  &:hover {
    background-color: ${colors.pastelBlue};
  }
`