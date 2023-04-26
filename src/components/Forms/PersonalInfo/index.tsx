import { useForm, SubmitHandler } from 'react-hook-form'
import { FormData } from './types'
import { useStepForm } from '../../../hooks/useStepForm'
import { Button } from '../../Button'

export const PersonalInfo: React.FC = () => {
  const { nextStep } = useStepForm()
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    nextStep();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <input {...register('name')} />
      <input {...register('email')} />
      <input {...register('phone')} />

      <Button type='submit' className='next'>
        Next
      </Button>
    </form>
  )
}
