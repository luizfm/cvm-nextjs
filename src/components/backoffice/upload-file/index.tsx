import Button from '@/components/button'
import {
  ChangeEvent,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { mergeRefs } from 'react-merge-refs'
import classnames from 'classnames'

import styles from './styles.module.scss'
import Image from 'next/image'
import { X } from '@phosphor-icons/react'

type UploadFileProps = {
  label: string
  className?: string
  onChange: (value?: string) => void
  error?: string
  defaultPicture?: string
}

const UploadFile = forwardRef<HTMLInputElement, UploadFileProps>(
  ({ label, className, onChange, error, defaultPicture }, ref) => {
    const [uploadedFile, setUploadedFile] = useState<string | undefined>(
      defaultPicture,
    )

    const inputRef = useRef<HTMLInputElement | null>(null)

    const onUploadButtonClick = useCallback(() => {
      if (inputRef.current) {
        inputRef.current.click()
      }
    }, [])

    const onInputChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.length) {
          const reader = new FileReader()
          const file = event.target.files?.[0] as File
          reader.onload = (ev: ProgressEvent<FileReader>) => {
            setUploadedFile(URL.createObjectURL(file))
            onChange(ev.target?.result as string)
          }
          reader.readAsDataURL(file)
        }
      },
      [onChange],
    )

    const onRemovePictureClick = useCallback(() => {
      setUploadedFile(undefined)
      onChange(undefined)
    }, [onChange])

    useEffect(() => {
      setUploadedFile(defaultPicture)
    }, [defaultPicture])

    return (
      <div className={classnames(styles['upload-file-container'], className)}>
        <label
          className={classnames({ [styles['error-label']]: Boolean(error) })}
        >
          {label}
        </label>
        <input
          tabIndex={-1}
          ref={mergeRefs([ref, inputRef])}
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          className={styles['upload-file-input']}
          onChange={onInputChange}
        />
        <Button
          onClick={onUploadButtonClick}
          className={classnames(styles['upload-file-button'], {
            [styles['error-button']]: Boolean(error),
          })}
        >
          Carregar foto de capa
        </Button>
        {!!uploadedFile && (
          <div className={styles['image-wrapper']}>
            <Image
              src={uploadedFile}
              alt="Imagem da capa da notícia"
              width={300}
              height={160}
              className={styles['post-image']}
            />
            <Button
              className={styles['remove-image-button']}
              onClick={onRemovePictureClick}
            >
              <X size={12} />
            </Button>
          </div>
        )}
        {Boolean(error) && (
          <span className={styles['error-message']}>{error}</span>
        )}
      </div>
    )
  },
)

UploadFile.displayName = 'UploadFile'

export default UploadFile
