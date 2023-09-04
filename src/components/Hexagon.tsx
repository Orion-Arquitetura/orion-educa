import styles from "../styles/Hexagons.module.scss";

export default function Hexagon({ img }: { img: string }) {
    return (
        <li style={{ backgroundImage: `url("${img}")` }} className={styles["hexagon"]} />
    )
}