import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'
import WhatsappImage from '@/assets/icons/whatsapp.png'

export default function JoinUsSection() {
  return (
    <section className={styles['join-us-section-container']}>
      <div className={styles['join-us-section-wrapper']}>
        <h2 className={styles['section-title']}>Trabalhe conosco</h2>
        <p className={styles['join-us-description']}>
          Para maiores detalhes das vagas em aberto, entre em contato conosco
          pelo WhatsApp no número abaixo
        </p>

        <Link
          className={styles['join-us-number']}
          href="https://wa.me/5548984544856"
          target="_blank"
        >
          <Image src={WhatsappImage} alt="" height={32} width={32} />
          <span className={styles['icon-info']}>+55 (48) 98454-4856</span>
        </Link>
      </div>
    </section>
  )
}
