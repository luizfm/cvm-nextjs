'use client'

import Input from '@/components/input'
import { REQUIRED_FIELD } from '@/constants/form'
import { Controller, useForm } from 'react-hook-form'

import styles from './styles.module.scss'
import Button from '@/components/button'
import UploadFile from '@/components/backoffice/upload-file'
import RichTextEditor from '@/components/backoffice/rich-text-editor'
import useCreatePost from '@/hooks/useCreatePost'
import useGetUser from '@/hooks/useGetUser'

type CratePostFormData = {
  title: string
  body: string
  post_image: string
}

export default function CreatePostsPage() {
  const { userId } = useGetUser()
  const { mutate } = useCreatePost()

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CratePostFormData>({
    defaultValues: {
      body: '',
      post_image: '',
      title: '',
    },
  })

  const onSubmit = handleSubmit((formData) => {
    const { body, post_image, title } = formData
    mutate({
      body,
      title,
      post_image,
      user_id: userId,
    })
  })

  return (
    <section className={styles['create-post-page-container']}>
      <h1 className={styles['page-title']}>Criar nova notícia</h1>
      <form className={styles['form-wrapper']} onSubmit={onSubmit}>
        <Input
          id="title-input"
          label="Título"
          placeholder="Aberta as matriculas para o ano de 2023"
          {...register('title', { required: REQUIRED_FIELD })}
          error={errors.title?.message}
        />
        <Controller
          control={control}
          name="post_image"
          rules={{ required: REQUIRED_FIELD }}
          render={({ field }) => (
            <UploadFile
              label="Foto de capa da notícia"
              onChange={field.onChange}
              error={errors.post_image?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="body"
          rules={{ required: REQUIRED_FIELD }}
          render={({ field }) => (
            <RichTextEditor
              label="Corpo da notícia"
              onChange={field.onChange}
              error={errors.body?.message}
            />
          )}
        />

        <Button
          type="submit"
          variant="secondary"
          className={styles['submit-button']}
        >
          Criar notícia
        </Button>
      </form>
    </section>
  )
}
