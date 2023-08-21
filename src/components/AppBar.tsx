/* eslint-disable @next/next/no-img-element */
import styles from "../styles/AppBar.module.scss"; // Import the CSS module

import Link from "next/link";

export default function AppBar() {
  return (
    <header className={styles.header}> {/* Use the generated class name */}
      <div className={styles["header-bar"]}></div> {/* Use bracket notation for hyphenated class names */}
      <div className={styles["header-main-div"]}> {/* Use bracket notation for hyphenated class names */}
        <img
          src="orion-logo-header.svg"
          alt="Orion Arquitetura"
          width={184}
        />

        <nav className={styles["header-nav"]}> {/* Use bracket notation for hyphenated class names */}
          <ul className={styles.list}>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/cursos"}>Cursos</Link>
            </li>
            <li>
              <Link href={"/quemSomos"}>Quem somos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
