import WhatsappImage from '@/assets/icons/whatsapp.png'
import InstagramImage from '@/assets/icons/instagram.png'
import FacebookImage from '@/assets/icons/facebook.webp'
import Image from 'next/image'

export const SOCIAL_MEDIA_OPTIONS = [
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/ongcvm',
    icon: <Image src={FacebookImage} alt="" height={32} width={32} />,
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/ongcvm/',
    icon: <Image src={InstagramImage} alt="" height={32} width={32} />,
  },
  {
    title: 'CEI',
    href: 'https://wa.me/5548988442918',
    icon: <Image src={WhatsappImage} alt="" height={32} width={32} />,
  },
]

export const WHATSAPP_NUMBER_OPTIONS = [
  {
    title: 'CEI',
    href: 'https://wa.me/5548988442918',
    icon: <Image src={WhatsappImage} alt="" height={32} width={32} />,
  },
]
