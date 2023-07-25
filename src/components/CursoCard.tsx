import styles from "../styles/CursoCard.module.scss";

export default function CursoCard() {
  return (
    <li className={styles.li}>
      <div>
        <h4 className={styles["card-titulo"]}>
          <strong>
            <i>Disciplina/Área</i>
          </strong>
        </h4>
        <div className={styles["curso-card-image-div"]}></div>
      </div>
      <div>
        <h4 className={styles.strong}>
          <strong><i>Nome do curso</i></strong>
        </h4>
        <p>
          <i>
            Breve descrição do curso ou das dicas. Breve descrição do curso ou
            das dicas. Breve descrição do curso ou das dicas.
          </i>
        </p>
        <p className={styles.duracao}><i>Duração da aula ou da leitura.</i></p>
      </div>
    </li>
  );
}
