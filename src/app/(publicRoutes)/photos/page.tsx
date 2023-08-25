import ThumbsGallery from '@/components/photos/thumbs-gallery'

import styles from './styles.module.scss'
import { photos } from '@/constants/photos'

export const metadata = {
  title: 'Galeria de fotos | CVM',
}

export default function Photos() {
  return (
    <div className={styles['photos-container']}>
      <h1 className={styles['page-title']}>Galeria de fotos</h1>
      <ThumbsGallery photosList={photos} />
    </div>
  )
}
