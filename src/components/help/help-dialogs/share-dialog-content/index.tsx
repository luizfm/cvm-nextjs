import { SOCIAL_MEDIA_OPTIONS } from '@/constants/social-media-options'

import styles from './styles.module.scss'
import Link from 'next/link'

export function ShareDialogContent() {
  return (
    <div>
      <p>
        Faça parte você também desta grande família, divulgue o trabalho da CVM.
        Participe de campanhas, e venha visitar, você será muito bem vindo.
      </p>
      <div className={styles['social-media-container']}>
        {SOCIAL_MEDIA_OPTIONS.map((socialMedia) => (
          <Link
            className={styles['social-media-item']}
            key={socialMedia.title}
            href={socialMedia.href}
            target="_blank"
          >
            {socialMedia.icon}
            <span className={styles['icon-info']}>{socialMedia.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ShareDialogContent
