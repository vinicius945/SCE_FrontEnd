import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <style>
        @import
        url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);
      </style>
      <p className={styles.address}>
        Av. Lins de Vasconcelos, 1222 – Cambuci, São Paulo – SP | +55 (11)
        7070-7070 | contato@sce.com.br
      </p>
      <p className={styles.credits}>
        © SCE – Safe & Clean Energy 2024 | Desenvolvido por{" "}
        <span className={styles.developer}>
          Enzo Prado (RM: 557937) | Lucas Lima (RM: 556564) | Vinicius Prates
          (RM: 559183)
        </span>
      </p>
    </footer>
  );
}
