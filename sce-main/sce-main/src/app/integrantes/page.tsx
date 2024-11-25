import styles from "./integrantes.module.css";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import imgEnzo from "/public/enzo.jpg";
import imgLucas from "/public/lucas.jpg";
import imgVinicius from "/public/vinicius.jpg";

export default function Integrantes() {
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
        <div className={styles.maincontent}>
          <h1>Integrantes</h1>
          <div className={styles.participants}>
            <div className={styles.participant}>
              <img src={imgEnzo.src} alt="Enzo" />
              <p>Enzo Prado (RM: 557937)</p>
              <p>1TDSR</p>
              <p>github.com/DerBrasilianer</p>
              <p>linkedin.com/in/der-brasilianer-390102259</p>
            </div>

            <div className={styles.participant}>
              <img src={imgLucas.src} alt="Lucas" />
              <p>Lucas Lima (RM: 556564)</p>
              <p>1TDSR</p>
              <p>github.com/olucso</p>
              <p>linkedin.com/in/lucas-resende</p>
            </div>

            <div className={styles.participant}>
              <img src={imgVinicius.src} alt="Vinicius" />
              <p>Vinicius Prates (RM: 559183)</p>
              <p>1TDSR</p>
              <p>github.com/vinicius945</p>
              <p>linkedin.com/in/vinicius-prates-altafini-b4a5911b9</p>
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
