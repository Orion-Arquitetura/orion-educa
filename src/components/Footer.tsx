/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-first-div"]}>
        <div>
          <img src="/orion-logo-branca.svg" alt="Orion" width={250} />
          <ul>
            <li>
              <img src="/instagram.svg" alt="Instagram" width={"90%"} />
            </li>

            <li>
              <img src="/fb.svg" alt="Facebook" width={"90%"} />
            </li>

            <li>
              <img src="/linkedin.svg" alt="Linkedin" width={"90%"} />
            </li>

            <li>
              <img src="/wpp.svg" alt="WhatsApp" width={"90%"} />
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["footer-second-div"]}>
        <h1>
          Venha desbravar o mundo <br /> e Viver a experiência com a gente!
        </h1>
      </div>
    </footer>
  );
}
