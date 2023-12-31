'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import classnames from 'classnames'

import CompanyLogo from '@/assets/images/logo/cvm-logo-new.png'

import styles from './styles.module.scss'
import NavigationMenu from '../navigation-menu'
import Button from '../button'

const MENU_ITEMS = [
  {
    label: 'Quem somos',
    path: '/about-us',
  },
  {
    label: 'Projetos',
    path: '/projects',
  },
  {
    label: 'Faça parte',
    path: '/help',
  },
  {
    label: 'Fotos',
    path: '/photos',
  },
]

const TRANSPARENCY_ITEMS = [
  {
    id: 1,
    trigger: <Button>Transparência</Button>,
    component: (
      <Link
        target="_blank"
        href="https://drive.google.com/file/d/1eoMl-AYzPBCPQOUfTjXN3CXy0ugRe_gy/view"
      >
        Relatório anual
      </Link>
    ),
  },
]

function Header() {
  const currentPath = usePathname()

  return (
    <header className={styles['header-container']}>
      <nav className={styles['nav-wrapper']}>
        <div className={styles['logo-wrapper']}>
          <Link href="/" className={styles['logo-link']}>
            <div>
              <Image
                src={CompanyLogo}
                alt="Uma mão segurando várias crianças"
                width={200}
                height={80}
                priority
              />
            </div>
          </Link>
        </div>
        <ul className={styles['item-list']}>
          {MENU_ITEMS.map((item) => (
            <li
              key={item.label}
              className={classnames(styles['nav-item'], {
                [styles.active]: currentPath === item.path,
              })}
            >
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))}
          <li>
            <NavigationMenu items={TRANSPARENCY_ITEMS} />
          </li>
          <li
            className={classnames(styles['nav-item'], {
              [styles.active]: currentPath === '/login',
            })}
          >
            <Link href={'/login'}>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
