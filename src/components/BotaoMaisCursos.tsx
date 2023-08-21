import Link from "next/link"
import styles from "../styles/BotaoMaisCursos.module.scss"

export default function BotaoMaisCursos() {
    return (
        <Link className={styles["botao-mais-cursos"]} href={"/cursos"}>
            MAIS CURSOS
        </Link>

    )
}