import HelpItem from "@/components/help-section/help-item";
import { HELP_ITEMS, HelpOptions } from "@/constants";

type GetCarouselHelpItemsProps = {
  onHelpClick: (id: HelpOptions) => void;
};

export const getCarouselHelpItems = ({
  onHelpClick,
}: GetCarouselHelpItemsProps) => {
  return HELP_ITEMS.map((item) => ({
    ...item,
    component: (
      <HelpItem
        id={item.id}
        title={item.title}
        animationUrl={item.animationUrl}
        onButtonClick={() => onHelpClick(item.id)}
      />
    ),
  }));
};
