import styles from "../styles/Hexagons.module.scss";
import Hexagon from "./Hexagon";

export default function HexagonsDiv() {
    return (
        <div className={styles["hexagons-div"]}>
            <ul>
                <Hexagon img={"/funcionarios/walter.webp"} />
                <Hexagon img={"/funcionarios/diego.jpg"} />
                <Hexagon img={"/funcionarios/joaopedro.webp"} />
                <Hexagon img={"/funcionarios/camila.webp"} />
                <Hexagon img={"/funcionarios/ravena.png"} />
            </ul>
            <ul>
                <Hexagon img={"/funcionarios/katia.png"} />
                <Hexagon img={"/funcionarios/marcosmarques.webp"} />
                <Hexagon img={"/funcionarios/marcos.webp"} />
                <Hexagon img={"/funcionarios/naomi.png"} />
                <Hexagon img={"/funcionarios/alexia.png"} />
                <Hexagon img={"/funcionarios/michel.webp"} />
            </ul>
            <ul>
                <Hexagon img={"/funcionarios/paulo.jpg"} />
                <Hexagon img={"/funcionarios/andrea.webp"} />
                <Hexagon img={"/funcionarios/carol.webp"} />
                <Hexagon img={"/funcionarios/julia.jpg"} />
                <Hexagon img={"/funcionarios/carvalho.jpg"} />
            </ul>
        </div>
    )
}