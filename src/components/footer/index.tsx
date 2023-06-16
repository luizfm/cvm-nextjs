import styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={styles["footer-container"]}>
      <div className={styles["footer-wrapper"]}>
        <div className={styles["footer-content"]}>
          <div className={styles["map-container"]}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14147.53546389527!2d-48.626866!3d-27.5661145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527499b661130e1%3A0x5b77fdc2119d729d!2sCVM%20-%20Creche%20e%20Orfanato%20Vinde%20a%20Mim%20as%20Criancinhas!5e0!3m2!1spt-BR!2sbr!4v1686941852744!5m2!1spt-BR!2sbr"
              width="800"
              height="300"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={styles["address-contact-info"]}>
            <p className={styles["contact"]}>Contato</p>
            <p>Rua Otto Júlio Malina - 1306, Ipiranga - São José - SC.</p>
            <p>(48) 3357-9400</p>
            <p>comunicacaosocialcvm@floripa.com.br</p>
          </div>
        </div>
        <p className={styles["copy-right"]}>
          Copyright © 2023 - CVM - Todos os direitos reservados - Desenvolvido
          por estudantes da IESGF
        </p>
      </div>
    </footer>
  );
}

export default Footer;
