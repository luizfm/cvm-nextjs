import BankDonationDialogContent from "@/components/help-section/help-dialogs/bank-donation-dialog-content";
import EnergyDialogContent from "@/components/help-section/help-dialogs/energy-dialog-content";
import MaintainerDialogContent from "@/components/help-section/help-dialogs/maintainer-dialog-content";
import PagSeguroDialogContent from "@/components/help-section/help-dialogs/pag-seguro-dialog-content";
import PrayDialogContent from "@/components/help-section/help-dialogs/pray-dialog-content";
import ShareDialogContent from "@/components/help-section/help-dialogs/share-dialog-content";
import VolunteerDialogContent from "@/components/help-section/help-dialogs/volunteer-dialog-content";

export enum HelpOptions {
  ENERGY = "energy",
  VOLUNTEER_WORK = "volunteer-work",
  PAGSEGURO = "pagseguro",
  MAINTAINER = "maintainer",
  DONATION = "donation",
  PRAY = "pray",
  SHARE = "share",
  BANK_DONATION = "bank-donation",
}

export const HELP_ITEMS = [
  {
    id: HelpOptions.ENERGY,
    title: "Energia Elétrica",
    animationUrl:
      "https://assets7.lottiefiles.com/private_files/lf30_iecf0ukj.json",
  },
  {
    id: HelpOptions.VOLUNTEER_WORK,
    title: "Trabalho voluntário",
    animationUrl:
      "https://assets2.lottiefiles.com/packages/lf20_IXyhboPtFQ.json",
  },
  {
    id: HelpOptions.PAGSEGURO,
    title: "PagSeguro",
    animationUrl: "https://assets1.lottiefiles.com/packages/lf20_7ShNC4.json",
  },
  {
    id: HelpOptions.MAINTAINER,
    title: "Mantenedor",
    animationUrl: "https://assets5.lottiefiles.com/packages/lf20_hpx8arg2.json",
  },
  {
    id: HelpOptions.DONATION,
    title: "Doação",
    animationUrl: "https://assets5.lottiefiles.com/packages/lf20_udTJtk.json",
  },
  {
    id: HelpOptions.PRAY,
    title: "Oração",
    animationUrl: "https://assets8.lottiefiles.com/packages/lf20_osjq2dmb.json",
  },
  {
    id: HelpOptions.SHARE,
    title: "Divulgando o trabalho",
    animationUrl: "https://assets9.lottiefiles.com/packages/lf20_9ti102vm.json",
  },
  {
    id: HelpOptions.BANK_DONATION,
    title: "Financeiramente",
    animationUrl:
      "https://assets2.lottiefiles.com/packages/lf20_WdDBKqWxXW.json",
  },
];

type HelpITemsDialogMapProps = {
  [key in HelpOptions]: {
    title: string;
    description?: string;
    content: JSX.Element;
  };
};

export const HELP_ITEMS_DIALOG_MAP: HelpITemsDialogMapProps = {
  [HelpOptions.ENERGY]: {
    title: "Energia Elétrica",
    description: "CELESC",
    content: <EnergyDialogContent />,
  },
  [HelpOptions.VOLUNTEER_WORK]: {
    title: "Trabalho voluntário",
    content: <VolunteerDialogContent />,
  },
  [HelpOptions.PAGSEGURO]: {
    title: "PagSeguro",
    content: <PagSeguroDialogContent />,
  },
  [HelpOptions.MAINTAINER]: {
    title: "Mantenedor",
    content: <MaintainerDialogContent />,
  },
  [HelpOptions.DONATION]: {
    title: "Doação",
    content: <EnergyDialogContent />,
  },
  [HelpOptions.PRAY]: {
    title: "Oração",
    content: <PrayDialogContent />,
  },
  [HelpOptions.SHARE]: {
    title: "Divulgando o trabalho",
    content: <ShareDialogContent />,
  },
  [HelpOptions.BANK_DONATION]: {
    title: "Doação financeira",
    content: <BankDonationDialogContent />,
  },
};
