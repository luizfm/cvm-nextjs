'use client'

import Input from '@/components/input'
import { REQUIRED_FIELD } from '@/constants/form'
import { Controller, useForm } from 'react-hook-form'

import styles from './styles.module.scss'
import Button from '@/components/button'
import UploadFile from '@/components/backoffice/upload-file'
import RichTextEditor from '@/components/backoffice/rich-text-editor'
import useGetUser from '@/hooks/useGetUser'
import useGetPostById from '@/hooks/useGetPostById'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import Spinner from '@/components/spinner'
import useUpdatePost from '@/hooks/useUpdatePost'

type UpdatePostFormData = {
  title: string
  body: string
  post_image: string
}

export default function BackofficePostDetails() {
  const { id } = useParams()
  const { userId } = useGetUser()
  const { data, isLoading } = useGetPostById(id)
  const { mutate, isLoading: isUpdating } = useUpdatePost(id)

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdatePostFormData>({
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

  const disableUpdateButton = isUpdating || Object.keys(errors).length > 0

  console.log({ disableUpdateButton })

  useEffect(() => {
    if (data?.post) {
      const {
        post: { title, body, post_image },
      } = data
      reset({
        body,
        title,
        post_image,
      })
    }
  }, [data, reset])

  return (
    <section className={styles['update-post-page-container']}>
      <h1 className={styles['page-title']}>Criar nova notícia</h1>
      {isLoading && <Spinner className={styles['spinner-wrapper']} />}
      {!isLoading && (
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
            render={({ field, formState }) => (
              <UploadFile
                label="Foto de capa da notícia"
                onChange={field.onChange}
                error={errors.post_image?.message}
                defaultPicture={formState.defaultValues?.post_image}
              />
            )}
          />

          <Controller
            control={control}
            name="body"
            rules={{ required: REQUIRED_FIELD }}
            render={({ field, formState }) => (
              <RichTextEditor
                label="Corpo da notícia"
                onChange={field.onChange}
                defaultValue={formState.defaultValues?.body}
                error={errors.body?.message}
              />
            )}
          />

          <Button
            type="submit"
            variant="secondary"
            disabled={disableUpdateButton}
            loading={isUpdating}
            className={styles['submit-button']}
          >
            Atualizar notícia
          </Button>
        </form>
      )}
    </section>
  )
}
