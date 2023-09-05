import Image from 'next/image'

import QrCode from '@/assets/images/qr-code-example.png'

import styles from './styles.module.scss'

export function BankDonationDialogContent() {
  return (
    <div>
      <p>Você pode realizar doações para a conta bancária abaixo</p>
      <div className={styles['bank-account-details']}>
        <p>Banco do Brasil</p>
        <p>Agência 5248-5</p>
        <p>Conta Corrente: 90246-2</p>
      </div>
      <p>ou, se preferir, utilizando o seguinte QR Code:</p>

      <div className={styles['image-wrapper']}>
        <Image
          src={QrCode}
          alt="QR Code"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
      </div>
    </div>
  )
}

export default BankDonationDialogContent
