'use client'

import BankDonationDialogContent from '@/components/help/help-dialogs/bank-donation-dialog-content'
import DonationDialogContent from '@/components/help/help-dialogs/donation-dialog-content'
import PrayDialogContent from '@/components/help/help-dialogs/pray-dialog-content'
import ShareDialogContent from '@/components/help/help-dialogs/share-dialog-content'
import VolunteerDialogContent from '@/components/help/help-dialogs/volunteer-dialog-content'

export enum HelpOptions {
  VOLUNTEER_WORK = 'volunteer-work',
  DONATION = 'donation',
  PRAY = 'pray',
  SHARE = 'share',
  BANK_DONATION = 'bank-donation',
}

export const HELP_ITEMS = [
  {
    id: HelpOptions.VOLUNTEER_WORK,
    title: 'Trabalho voluntário',
    animationUrl:
      'https://assets2.lottiefiles.com/packages/lf20_IXyhboPtFQ.json',
  },
  {
    id: HelpOptions.DONATION,
    title: 'Doação',
    animationUrl:
      'https://lottie.host/d9b4df99-07b7-4b5b-9695-ad01bd3ba835/j2XiRGQgrd.json',
  },
  {
    id: HelpOptions.PRAY,
    title: 'Oração',
    animationUrl:
      'https://lottie.host/2f8c69cf-4455-4dc9-a9f2-ba4f48d392b0/P0PzboHDNS.json',
  },
  {
    id: HelpOptions.SHARE,
    title: 'Divulgando o trabalho',
    animationUrl: 'https://assets9.lottiefiles.com/packages/lf20_9ti102vm.json',
  },
  {
    id: HelpOptions.BANK_DONATION,
    title: 'Financeiramente',
    animationUrl:
      'https://assets2.lottiefiles.com/packages/lf20_WdDBKqWxXW.json',
  },
]

type HelpITemsDialogMapProps = {
  [key in HelpOptions]: {
    title: string
    description?: string
    content: JSX.Element
  }
}

export const HELP_ITEMS_DIALOG_MAP: HelpITemsDialogMapProps = {
  [HelpOptions.VOLUNTEER_WORK]: {
    title: 'Trabalho voluntário',
    content: <VolunteerDialogContent />,
  },
  [HelpOptions.DONATION]: {
    title: 'Doação',
    content: <DonationDialogContent />,
  },
  [HelpOptions.PRAY]: {
    title: 'Oração',
    content: <PrayDialogContent />,
  },
  [HelpOptions.SHARE]: {
    title: 'Divulgando o trabalho',
    content: <ShareDialogContent />,
  },
  [HelpOptions.BANK_DONATION]: {
    title: 'Doação financeira',
    content: <BankDonationDialogContent />,
  },
}
