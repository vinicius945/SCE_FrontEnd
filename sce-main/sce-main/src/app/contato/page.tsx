import styles from "./contato.module.css";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";

export default function Contato() {
  return (
    <div>
      <style>
        @import
        url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);
      </style>
      <div>
        <Navbar />
      </div>
      <div className={styles.container}>
        <h1>
          Preencha com seus dados abaixo para entrar em contato{" "}
          <span className={styles.highlight}>conosco</span>!
        </h1>
        <form className={styles.form}>
          <div className={styles.row}>
            <input
              type="text"
              placeholder="Nome"
              className={styles.input}
              required
            />
            <input
              type="text"
              placeholder="Sobrenome"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.row}>
            <input
              type="email"
              placeholder="E-mail"
              className={styles.input}
              required
            />
            <input
              type="tel"
              placeholder="Celular com DDD"
              className={styles.input}
              required
            />
          </div>
          <textarea
            placeholder="Escreva sua mensagem"
            className={styles.textarea}
            required
          ></textarea>
          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="consent" required />
            <label htmlFor="consent">
              Ao preencher o formulário, concordo em receber comunicações da
              SCE. Ao informar meus dados, eu concordo com a política de
              privacidade.
            </label>
          </div>
          <button type="submit" className={styles.button}>
            Enviar
          </button>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
