/**
 * Energia Elétrica
 * Trabalho voluntário
 * PagSeguro
 * Mantenedor
 * Doação
 * Oração
 * Divulgando o trabalho
 * Financeiramente
 */
import { Carousel } from "../carousel";
import Dialog from "../dialog";

import styles from "./styles.module.scss";
import { useCallback, useState } from "react";
import { getCarouselHelpItems } from "@/utils/getCarouselHelpItems";
import { Autoplay, Pagination } from "swiper";
import { HELP_ITEMS_DIALOG_MAP, HelpOptions } from "@/constants";

export function HelpSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogId, setDialogId] = useState<HelpOptions>(HelpOptions.DONATION);

  const onOpenDialog = useCallback(() => {
    setIsDialogOpen((prevValue) => !prevValue);
  }, []);

  const onHelpClick = useCallback(
    (id: HelpOptions) => {
      setDialogId(id);
      onOpenDialog();
    },
    [onOpenDialog]
  );

  const helpItems = getCarouselHelpItems({ onHelpClick });

  const {
    content,
    title,
    description = "",
  } = HELP_ITEMS_DIALOG_MAP[dialogId as HelpOptions];

  return (
    <section className={styles["help-section"]}>
      <h2 className={styles["help-title"]}>Ajude</h2>

      <Carousel modules={[Pagination, Autoplay]} items={helpItems} />

      {isDialogOpen && (
        <Dialog
          title={title}
          description={description}
          onOpenChange={onOpenDialog}
        >
          {content}
        </Dialog>
      )}
    </section>
  );
}
