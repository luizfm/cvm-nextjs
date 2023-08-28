import classnames from 'classnames'

import styles from './styles.module.scss'

type ErrorMessageProps = {
  htmlFor: string
  message: string
  className?: string
}

export default function ErrorMessage({
  htmlFor,
  message,
  className,
}: ErrorMessageProps) {
  return (
    <div className={classnames(styles['error-message-container'], className)}>
      <label htmlFor={htmlFor} className={styles['error-label']}>
        {message}
      </label>
    </div>
  )
}
