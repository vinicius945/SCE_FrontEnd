import styles from "./Navbar.module.css";
import imgLogoReduzido from "/public/sce-logo-reduzido.png";

export default function Navbar() {
  return (
    <div>
      <style>
        @import
        url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);
      </style>
      <div className={styles.navbar}>
        <div className={styles["nav-home"]}>
          <a href="/.">
            <img
              src={imgLogoReduzido.src}
              alt="Logo da empresa"
              className={styles.logo}
            />
          </a>
        </div>

        <div className={styles["nav-links"]}>
          <a href="/quem-somos">Quem Somos</a>
          <a href="/cases-de-sucesso">Cases de Sucesso</a>
          <a href="/faca-parte">Faça Parte!</a>
          <a href="/contato">Contato</a>
        </div>
        <div className={styles["nav-actions"]}>
          <a href="/integrantes">Integrantes</a>
        </div>
      </div>
    </div>
  );
}
