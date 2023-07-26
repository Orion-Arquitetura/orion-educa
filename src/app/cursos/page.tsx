/* eslint-disable @next/next/no-img-element */
import CursoCard from "@/components/CursoCard";
import styles from "../../styles/Cursos.module.scss";

export default function Cursos() {
  return (
    <>
      <div className={styles["top-div"]}>
        <img src="/equipe-orion.svg" alt="Equipe Orion" />
        <div className={styles["input-div"]}>
          <input
            type="text"
            maxLength={25}
            placeholder="Pesquise aqui o curso da sua preferência"
          />
        </div>
      </div>

      <div className={styles["cursos-div"]}>
        <ul>
          {Array(9)
            .fill("text")
            .map((element) => (
              <CursoCard key={Math.random() * 1000} />
            ))}
        </ul>
      </div>
    </>
  );
}
