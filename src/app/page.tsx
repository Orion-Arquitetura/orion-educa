/* eslint-disable @next/next/no-img-element */
import React from "react";
import RoundListItem from "@/components/RoundListItem";
import styles from "../styles/HomePage.module.scss";
import CursoCard from "@/components/CursoCard";
import BotaoMaisCursos from "@/components/BotaoMaisCursos";

export default function Home() {
  return (
    <main>
      <section className={styles["section-1"]}>
        <div className={styles["top-div"]}>
          <div className={styles["text-div"]}>
            <h1>
              <i>
                O que você pode <br /> aprender com a gente:
              </i>{" "}
              <br />
            </h1>
            <p>
              <i>
                Dicas e cursos específicos das disciplinas <br /> que usamos no nosso
                dia a dia
              </i>
            </p>
            <strong>
              <i>Compartilhamos com você!</i>
            </strong>
          </div>
          <div>
            <img src="/equipe-orion.svg" alt="Equipe Orion" />
          </div>
        </div>

        <div className={styles["list-div"]}>
          <ul>
            <RoundListItem imgHref="/icon-book.svg" alt="Monte seu plano de estudos" />
            <RoundListItem imgHref="/icon-location.svg" alt="Veja as aulas no seu tempo!" />
            <RoundListItem imgHref="/icon-olho.svg" alt="Veja as aulas em qualquer lugar!" />
            <RoundListItem imgHref="/icon-chat.svg" alt="Encaminhe suas dúvidas!" />
          </ul>
        </div>
      </section>
      <section className={styles["section-2"]}>
        <ul>
          <CursoCard />
          <CursoCard />
          <CursoCard />
          <CursoCard />
        </ul>

        <BotaoMaisCursos />
      </section>
    </main>
  );
}
