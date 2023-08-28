import classnames from 'classnames'
import React, { ButtonHTMLAttributes } from 'react'

import styles from './styles.module.scss'
import { SpinnerGap } from '@phosphor-icons/react'
import Link from 'next/link'
import Spinner from '../spinner'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit'
  loading?: boolean
  disabled?: boolean
  children: React.ReactNode
  to?: string
}

export function Button({
  type = 'button',
  variant = 'primary',
  className,
  loading = false,
  disabled,
  children,
  to,
  ...restButtonProps
}: ButtonProps) {
  const buttonChildren = loading ? <Spinner size={'small'} /> : children

  const disabledButton = disabled || loading

  const buttonClasses = classnames(
    styles.button,
    styles[variant],
    { [styles.disabled]: disabled },
    className,
  )

  if (to) {
    return (
      <Link href={to} className={buttonClasses}>
        {buttonChildren}
      </Link>
    )
  }

  return (
    <button
      type={type}
      disabled={disabledButton}
      className={buttonClasses}
      {...restButtonProps}
    >
      {buttonChildren}
    </button>
  )
}

export default Button
