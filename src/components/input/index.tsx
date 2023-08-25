import { InputHTMLAttributes, forwardRef } from 'react'
import classnames from 'classnames'

import styles from './styles.module.scss'

type InputCustomProps = {
  label: string
  hiddenLabel?: boolean
  className?: string
  error?: string
  suffix?: React.ReactNode
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & InputCustomProps

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, hiddenLabel = false, error, className, suffix, ...restInputProps },
    ref,
  ) => {
    return (
      <div className={classnames(styles['input-container'], className)}>
        <label
          className={classnames(styles['input-label'], {
            [styles['hidden-label']]: hiddenLabel,
            [styles['label-error']]: Boolean(error),
          })}
        >
          {label}
        </label>
        <div
          className={classnames(styles['input-wrapper'], {
            [styles['wrapper-error']]: Boolean(error),
          })}
        >
          <input className={styles.input} {...restInputProps} ref={ref} />
          {suffix}
        </div>
        {Boolean(error) && (
          <span className={styles['error-message']}>{error}</span>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
export default Input
