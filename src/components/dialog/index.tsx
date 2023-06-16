import * as RadixDialog from "@radix-ui/react-dialog";

import styles from "./styles.module.scss";
import { X } from "@phosphor-icons/react";
import Button from "../button";

type DialogProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  onOpenChange: () => void;
  hasCloseButton?: boolean;
  hasConfirmButton?: boolean;
};

export function Dialog({
  title,
  description,
  children,
  hasCloseButton = true,
  hasConfirmButton = false,
  onOpenChange,
}: DialogProps) {
  return (
    <RadixDialog.Root open onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={styles["dialog-overlay"]} />
        <RadixDialog.Content className={styles["dialog-content"]}>
          <header className={styles["dialog-header"]}>
            <RadixDialog.Title>{title}</RadixDialog.Title>
            {description && (
              <RadixDialog.Description>{description}</RadixDialog.Description>
            )}
            {hasCloseButton && (
              <RadixDialog.Close asChild className={styles["close-button"]}>
                <X size={16} weight="bold" />
              </RadixDialog.Close>
            )}
          </header>

          <div className={styles["dialog-children"]}>{children}</div>

          {hasConfirmButton && (
            <footer className={styles["dialog-footer"]}>
              <Button>Ok</Button>
            </footer>
          )}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}

export default Dialog;
