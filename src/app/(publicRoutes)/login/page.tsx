'use client'

import Button from '@/components/button'
import Input from '@/components/input'
import { REQUIRED_FIELD } from '@/constants/form'
import { useForm } from 'react-hook-form'

import styles from './styles.module.scss'
import { useCallback, useState } from 'react'
import { Eye, EyeClosed } from '@phosphor-icons/react'
import useLogin from '@/hooks/useLogin'
import useGetUser from '@/hooks/useGetUser'
import { redirect } from 'next/navigation'

type FormDefaultValues = {
  email: string
  password: string
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const { mutate, isLoading } = useLogin()
  const { userId } = useGetUser()

  const onShowPasswordClick = useCallback(() => {
    setShowPassword((prevValue) => !prevValue)
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDefaultValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = handleSubmit((formData: FormDefaultValues) => {
    const { email, password } = formData
    mutate({ email, password })
  })

  if (userId) {
    redirect('/backoffice')
  }

  return (
    <div className={styles['login-page']}>
      <form onSubmit={onSubmit} className={styles['form-wrapper']}>
        <Input
          id="email-input"
          type="email"
          placeholder="meu_email@gmail.com"
          label="Email"
          {...register('email', {
            required: REQUIRED_FIELD,
          })}
          error={errors.email?.message}
        />
        <Input
          id="password-input"
          type={showPassword ? 'text' : 'password'}
          placeholder="*******"
          label="Senha"
          suffix={
            <Button
              className={styles['show-password-button']}
              onClick={onShowPasswordClick}
            >
              {showPassword ? <Eye size={16} /> : <EyeClosed size={16} />}
            </Button>
          }
          {...register('password', {
            required: REQUIRED_FIELD,
          })}
          error={errors.password?.message}
        />
        <Button
          variant="secondary"
          type="submit"
          disabled={isLoading}
          loading={isLoading}
        >
          Acessar
        </Button>
      </form>
    </div>
  )
}
