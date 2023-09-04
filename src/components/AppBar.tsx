/* eslint-disable @next/next/no-img-element */
'use client'
import { usePathname } from "next/navigation";
import styles from "../styles/AppBar.module.scss"; // Import the CSS module

import Link from "next/link";

export default function AppBar() {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <div className={styles["header-bar"]}></div>
      <div className={styles["header-main-div"]}>
        <img
          src={pathname === "/quemSomos" ? "/bandeira-gptw.svg" : "/orion-logo-header.svg"}
          alt="Orion Arquitetura"
          className={styles.logo}
        />

        <nav className={styles["header-nav"]} style={pathname === "/quemSomos" ? {paddingTop: "30px"} : {}}>
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
