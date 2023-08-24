'use client'

import { useCallback, useState } from 'react'
import { getCarouselHelpItems } from '@/utils/getCarouselHelpItems'
import { Autoplay, Pagination } from 'swiper'
import { HELP_ITEMS_DIALOG_MAP, HelpOptions } from '@/constants'
import Dialog from '@/components/dialog'
import { Carousel } from '@/components/carousel'

import styles from './styles.module.scss'

export default function Help() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [dialogId, setDialogId] = useState<HelpOptions>(HelpOptions.DONATION)

  const onOpenDialog = useCallback(() => {
    setIsDialogOpen((prevValue) => !prevValue)
  }, [])

  const onHelpClick = useCallback(
    (id: HelpOptions) => {
      setDialogId(id)
      onOpenDialog()
    },
    [onOpenDialog],
  )

  const helpItems = getCarouselHelpItems({ onHelpClick })

  const {
    content,
    title,
    description = '',
  } = HELP_ITEMS_DIALOG_MAP[dialogId as HelpOptions]

  return (
    <section className={styles['help-section']}>
      <h1 className={styles['help-title']}>Escolha a melhor forma de doar</h1>

      <Carousel modules={[Pagination, Autoplay]} items={helpItems} />

      {isDialogOpen && (
        <Dialog
          title={title}
          description={description}
          onOpenChange={onOpenDialog}
        >
          {content}
        </Dialog>
      )}
    </section>
  )
}
