import styles from "./page.module.css";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import imgUsinaBiometano from "/public/usina-biometano.jpg";

export default function Home() {
  return (
    <div>
      <style>
        @import
        url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);
      </style>
      <div>
        <Navbar />
      </div>

      <div className={styles["hero-section"]}>
        <img
          src={imgUsinaBiometano.src}
          alt="Usina Biometano"
          className={styles["hero-image"]}
        />
        <div className={styles["hero-text"]}>
          <h1>SCE – Safe & Clean Energy</h1>
          <p>Traçando o presente pensando no futuro.</p>
          <p>
            Regulado pela ANP, o biometano reduz em 99% as emissões de gases de
            efeito estufa, tornando-se a solução ideal para descarbonizar
            processos industriais e frotas.
          </p>
        </div>
      </div>

      <section className={styles.container}>
        <h2 className={styles.title}>10 vantagens do uso de biometano</h2>
        <ul className={styles.list}>
          <li>
            <span>1</span> Diminui em até 99% a emissão de gases que contribuem
            para o aquecimento global.
          </li>
          <li>
            <span>2</span> É uma fonte de energia completamente renovável.
          </li>
          <li>
            <span>3</span> Remove a necessidade de adquirir créditos de carbono.
          </li>
          <li>
            <span>4</span> Possui regulamentação pela ANP e pode ser usado da
            mesma forma que o gás natural.
          </li>
          <li>
            <span>5</span> Produzido 100% no Brasil, sem ser afetado por
            variações cambiais ou do preço do petróleo.
          </li>
          <li>
            <span>6</span> Substitui combustíveis fósseis, como GLP, óleo
            combustível, gás natural, diesel, gasolina e GNV.
          </li>
          <li>
            <span>7</span> Aplicável em frotas de veículos leves e pesados, além
            de processos industriais.
          </li>
          <li>
            <span>8</span> Converte resíduos urbanos, um dos grandes desafios
            das cidades, em energia sustentável.
          </li>
          <li>
            <span>9</span> Oferece certificação de origem renovável por meio do
            BioREC.
          </li>
          <li>
            <span>10</span> É a solução ideal para cumprir as metas de ESG da
            sua empresa.
          </li>
        </ul>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}
