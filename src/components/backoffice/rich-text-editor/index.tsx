import { Editor } from '@tinymce/tinymce-react'
import classnames from 'classnames'

import ErrorMessage from '@/components/error-message'

import styles from './styles.module.scss'

type RichTextEditorProps = {
  label: string
  onChange: () => void
  className?: string
  error?: string
  defaultValue?: string
}

export default function RichTextEditor({
  label,
  onChange,
  className,
  error,
  defaultValue,
}: RichTextEditorProps) {
  return (
    <div
      className={classnames(styles['rich-text-editor-container'], className)}
    >
      <label
        htmlFor="rich-text-editor"
        className={classnames(styles.label, {
          [styles['label-editor-error']]: Boolean(error),
        })}
      >
        {label}
      </label>
      <div
        className={classnames({
          [styles['editor-wrapper-error']]: Boolean(error),
        })}
      >
        <Editor
          id="rich-text-editor"
          apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
          onEditorChange={onChange}
          initialValue={defaultValue}
          init={{
            height: 500,
            plugins: 'lists link image paste help wordcount',
            toolbar:
              'undo redo | blocks | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | help',
          }}
        />
      </div>
      {!!error && (
        <ErrorMessage
          className={styles['body-editor-error']}
          htmlFor="rich-text-editor"
          message={error}
        />
      )}
    </div>
  )
}
