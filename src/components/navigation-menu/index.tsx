import * as RadixNavigationMenu from '@radix-ui/react-navigation-menu'
import React from 'react'

import styles from './styles.module.scss'

type DropdownMenuItemsProps = {
  id: string | number
  trigger: JSX.Element
  component: React.ReactNode
}

type DropdownMenuProps = {
  items: DropdownMenuItemsProps[]
}

export default function DropdownMenu({ items }: DropdownMenuProps) {
  return (
    <RadixNavigationMenu.Root className={styles['navigation-root']}>
      <RadixNavigationMenu.List className={styles['navigation-list']}>
        {items.map((item) => (
          <RadixNavigationMenu.Item key={item.id}>
            <RadixNavigationMenu.Trigger asChild>
              {item.trigger}
            </RadixNavigationMenu.Trigger>
            <RadixNavigationMenu.Content
              className={styles['navigation-content']}
            >
              <RadixNavigationMenu.Link
                className={styles['navigation-link']}
                asChild
              >
                {item.component}
              </RadixNavigationMenu.Link>
            </RadixNavigationMenu.Content>
          </RadixNavigationMenu.Item>
        ))}
      </RadixNavigationMenu.List>
    </RadixNavigationMenu.Root>
  )
}
