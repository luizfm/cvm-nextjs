import Button from '@/components/button'
import Image from 'next/image'
import Link from 'next/link'
import CompanyLogo from '@/assets/images/logo/cvm-logo-new.png'

import styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={styles['header-container']}>
      <div className={styles['header-content-wrapper']}>
        <Link href="/backoffice">
          <Image src={CompanyLogo} alt="Company logo" />
        </Link>
        <div className={styles['buttons-container']}>
          <Button to="/">Voltar para o site</Button>
          <Button to="/backoffice/posts/create" variant="secondary">
            Nova notícia
          </Button>
          <Button>Sair</Button>
        </div>
      </div>
    </header>
  )
}
