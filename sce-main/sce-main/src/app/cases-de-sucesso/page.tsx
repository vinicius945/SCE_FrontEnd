import styles from "./cases-de-sucesso.module.css";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import imgVolks from "/public/volks.jpeg";
import imgUnilever from "/public/unilever.jpg";
import imgChevrolet from "/public/chevrolet.png";

export default function CasesDeSucesso() {
  return (
    <div>
      <style>
        @import
        url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);
      </style>
      <div>
        <Navbar />
      </div>
      <div className={styles.content}>
        <h1 className={styles.titulo}>Cases de Sucesso</h1>
        <p className={styles.descricao}>
          Conheça alguns clientes notáveis que obtiveram sucesso com a nossa
          solução:
        </p>
        <div className={styles.planos}>
          <div className={styles.plano}>
            <img src={imgVolks.src} alt="Volks" className={styles.imagem} />
            <div className={styles.descricaoPlano}>
              <h2>Volkswagen Caminhões</h2>
              <p>
                Implementação do biometano como combustível para caminhão
                lançamento.
              </p>
            </div>
          </div>
          <div className={styles.plano}>
            <img
              src={imgUnilever.src}
              alt="Unilever"
              className={styles.imagem}
            />
            <div className={styles.descricaoPlano}>
              <h2>Unilever</h2>
              <p>
                Implantação do biometano em veículos de logística e entrega,
                para um futuro mais verde.
              </p>
            </div>
          </div>
          <div className={styles.plano}>
            <img
              src={imgChevrolet.src}
              alt="Chevrolet"
              className={styles.imagem}
            />
            <div className={styles.descricaoPlano}>
              <h2>Chevrolet</h2>
              <p>Implantação do biometano em seus processos industriais.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
