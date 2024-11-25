import styles from "./quem-somos.module.css";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import imgPlantaBiometano from "/public/planta-biometano.png";

export default function QuemSomos() {
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
        <section className={styles.header}>
          <h1>
            <span className={styles.highlight}>SCE</span>, líder em produção de
            biometano
          </h1>
        </section>

        <section className={styles.content}>
          <div className={styles.imageContainer}>
            <img
              src={imgPlantaBiometano.src}
              alt="Planta industrial"
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <p>
              Atuando no Brasil, a SCE desenvolve soluções inovadoras para
              reduzir as emissões de carbono em empresas de diversos segmentos,
              contribuindo para um futuro mais sustentável e alinhado ao
              compromisso ambiental.
            </p>
            <p>
              O biometano produzido pela empresa é obtido a partir do biogás
              gerado em aterros sanitários localizados no Rio de Janeiro e em
              São Paulo. A meta da SCE é aumentar a produção atual de 160 mil
              m³/dia para <strong>600 mil m³/dia</strong> até 2028, com a
              construção de 10 novas unidades de produção espalhadas pelo país.
            </p>
            <p>
              A partir de 2025, a empresa iniciará a oferta de{" "}
              <strong>CO₂ sustentável</strong>, uma alternativa ecológica ao gás
              carbônico tradicional, voltada para atender às necessidades de
              indústrias de diferentes setores.
            </p>
            <p>
              Além disso, oferece energia renovável e o <strong>BioREC</strong>,
              um certificado que garante a rastreabilidade do biometano
              produzido.
            </p>
            <p>
              Com essas iniciativas, a SCE se consolida como parceira
              estratégica para auxiliar empresas a alcançarem suas metas de
              sustentabilidade e acelerarem a transição para um futuro neutro em
              carbono.
            </p>
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
