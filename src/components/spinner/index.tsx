import classNames from 'classnames'
import styles from './styles.module.scss'

type SpinnerProps = {
  size?: 'small' | 'large'
  className?: string
}

function Spinner({ size = 'large', className }: SpinnerProps) {
  return (
    <div className={className}>
      <div
        data-testid="spinner"
        className={classNames(styles['c-spinner'], {
          [styles['c-spinner--small']]: size === 'small',
        })}
      />
    </div>
  )
}

export default Spinner
