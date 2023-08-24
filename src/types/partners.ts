import { StaticImageData } from 'next/image'

export type Partners = {
  id: string
  name: string
  description: string
  imageUrl: StaticImageData | string
  href: string
}
