import Button from '@/components/button'
import LottiesAnimation from '@/components/lotties-animation'

import styles from './styles.module.scss'
import { useCallback } from 'react'

type HelpItemProps = {
  id: string
  title: string
  animationUrl: string
  onButtonClick: (id: string) => void
}

export function HelpItem({
  id,
  animationUrl,
  title,
  onButtonClick,
}: HelpItemProps) {
  const handleOnButtonClick = useCallback(() => {
    onButtonClick(id)
  }, [id, onButtonClick])

  return (
    <div className={styles['help-item-container']}>
      <div className={styles['help-item-wrapper']}>
        <h3 className={styles.title}>{title}</h3>
        <LottiesAnimation src={animationUrl} />

        <Button onClick={handleOnButtonClick} className={styles['help-button']}>
          Ajudar desta forma
        </Button>
      </div>
    </div>
  )
}

export default HelpItem
