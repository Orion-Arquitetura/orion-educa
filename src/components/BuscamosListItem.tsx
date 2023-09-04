import styles from "../styles/BuscamosList.module.scss";

export default function BuscamosListItem({ title, description }: { title: string, description: string }) {
    return (
        <li className={styles["buscamos-list-item"]}>
            <h2>{title}</h2>
            <div>
                <p>{description}</p>
            </div>
        </li>
    )
}