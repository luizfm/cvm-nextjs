import PagseguroButton from "./pagseguro-button";

import styles from "./styles.module.scss";

export function PagSeguroDialogContent() {
  return (
    <div className={styles["pag-seguro-dialog-content-container"]}>
      <p>Na página inicial do site por meio de cartão de crédito.</p>
      <PagseguroButton className={styles["donation-button"]} />
    </div>
  );
}

export default PagSeguroDialogContent;
