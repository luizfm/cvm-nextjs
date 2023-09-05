'use client'

import styles from './styles.module.scss'
import Link from 'next/link'
import { SOCIAL_MEDIA_OPTIONS } from '@/constants/social-media-options'
import Image from 'next/image'
import DonationImage from '@/assets/images/footer/donation.png'

function Footer() {
  return (
    <footer className={styles['footer-container']}>
      <div className={styles['footer-image-wrapper']}>
        <Image
          src={DonationImage}
          alt="Imagem de ajuda"
          className={styles['footer-image']}
          fill
          sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 100vw"
          quality={100}
        />
      </div>
      <div className={styles['footer-wrapper']}>
        <div className={styles['footer-content']}>
          <div className={styles['address-contact-info']}>
            <p className={styles.address}>Contato</p>
            <p>Rua Otto Júlio Malina - 1306, Ipiranga - São José - SC.</p>
            <p>(48) 3357-9400</p>
            <p>comunicacaosocialcvm@floripa.com.br</p>
          </div>
          <div className={styles['connect-container']}>
            <div className={styles['social-media-container']}>
              {SOCIAL_MEDIA_OPTIONS.map((socialMedia) => (
                <Link
                  className={styles['social-media-item']}
                  key={socialMedia.title}
                  href={socialMedia.href}
                  target="_blank"
                >
                  {socialMedia.icon}
                  <span className={styles['icon-info']}>
                    {socialMedia.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14147.53546389527!2d-48.626866!3d-27.5661145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527499b661130e1%3A0x5b77fdc2119d729d!2sCVM%20-%20Creche%20e%20Orfanato%20Vinde%20a%20Mim%20as%20Criancinhas!5e0!3m2!1spt-BR!2sbr!4v1686941852744!5m2!1spt-BR!2sbr"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <p className={styles['copy-right']}>
          Copyright © 2023 - CVM - Todos os direitos reservados - Desenvolvido
          por estudantes da IESGF
        </p>
      </div>
    </footer>
  )
}

export default Footer
