import styled from 'styled-components';
import { colors } from '../../../styles/theme';

export const Container = styled.div` 
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 4rem;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: ${colors.marine};
    font-size: 1.5rem;
    margin-top: 1.5rem;
    text-transform: capitalize;
  }

  h2 {
    font-size: 12px;
    font-weight: 400;
    color: ${colors.gray};
    margin: 6px 0 12px 0;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`

export const Label = styled.label`
    font-size: 12px;
    color: ${colors.marine};
    margin-bottom: 2px;
    font-weight: 400;
`

export const Input = styled.input`
    width: 100%;
    border: 1px solid ${colors.lightGray};
    border-radius: 8px;
    padding: 10px;

    color: ${colors.marine};

    &:focus {
        border: 1px solid ${colors.marine};
        outline: none;
    }
`

export const ContainerButton = styled.div`
  display: flex;
  align-self: flex-end;
  margin: 3rem 0 0.5rem 0;
`