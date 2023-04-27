import { useForm, SubmitHandler } from 'react-hook-form'
import { FormData } from './types'
import { useStepForm } from '../../../hooks/useStepForm'
import { Button } from '../../Button'
import * as S from './styles'

export const PersonalInfo: React.FC = () => {
  const { currentStep, nextStep } = useStepForm()
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    nextStep();
  }

  return (
    <S.Container>
      <h1>Personal Info</h1>
      <h2>Please provide your name, email address and phone number.</h2>
      <form onSubmit={handleSubmit(onSubmit)} >
        <S.InputGroup>
          <S.Label htmlFor='name'>Name</S.Label>
          <S.Input
            placeholder='e.g Vanessa Mint'
            {...register('name')}
          />
        </S.InputGroup>

        <S.InputGroup>
          <S.Label htmlFor='email'>Email Address</S.Label>
          <S.Input
            placeholder='e.g vanessamint@example.org'
            {...register('email')}
          />
        </S.InputGroup>

        <S.InputGroup>
          <S.Label htmlFor='phone'>Phone Number</S.Label>
          <S.Input
            placeholder='e.g. +12 (34) 56789-0000'
            {...register('phone')}
          />
        </S.InputGroup>

        <S.ContainerButton>
          <Button type='submit' className='next'>
            Next Step
          </Button>
        </S.ContainerButton>
      </form>
    </S.Container>
  )
}
