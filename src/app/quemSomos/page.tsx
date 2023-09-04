/* eslint-disable @next/next/no-img-element */
import BuscamosListItem from "@/components/BuscamosListItem";
import styles from "../../styles/QuemSomos.module.scss";
import HexagonsDiv from "@/components/HexagonsDiv";

export default function QuemSomos() {
    return (
        <main className={styles["quemsomos-main"]}>
            <div className={styles["quemsomos-first-div"]}>
                <section className={styles["quemsomos-section1"]}>
                    <div className={styles["section1-img-div"]}>
                        <img src="/equipe-orion.svg" alt="Equipe orion" />
                    </div>
                    <div>
                        <h2 className={styles["section1-title"]}>Sobre nós</h2>
                        <p>
                            Somos a Orion Arquitetura, uma empresa que tem como propósito a criação de ambientes
                            saudáveis com foco no bem-estar das pessoas.
                        </p>
                    </div>
                    <div className={styles["buscamos-list-div"]}>
                        <h2 className={styles["section1-title"]}>O que buscamos</h2>
                        <ul>
                            <BuscamosListItem title="Qualidade, Eficiência e Inovação!" description="Tudo isso para sermos referência de qualidade, eficiência e inovação em arquitetura e engenharia para a saúde." />
                            <BuscamosListItem title="Humanização" description="Pensar em quem vai usar o espaço é o diferencial do nosso escritório." />
                            <BuscamosListItem title="Padrões e Processos" description="Consolidados permite que trabalhemos de forma integrada, presencial ou remotamente. Com qualidade, eficiência e inovação." />
                            <BuscamosListItem title="Experiência do Usuário" description="A jornada do usuário é pensada em todas as fases do projeto." />
                        </ul>
                    </div>
                </section>
                <section className={styles["quemsomos-section2"]}>
                    <HexagonsDiv />
                    <div className={styles["quemsomos-section2-text-div"]}>
                        <p>Esse é o nosso movimento, <br /> esse é o nosso estilo de vida! </p>
                        <p>+ 50.000,00m²<br /> projetados em 5 anos!</p>
                    </div>
                </section>
            </div>
            <div className={styles["parceiros-div"]}>
                    <ul>
                        <li>
                            <img src="/parceiros/coppetec.png" alt="" />
                        </li>
                        <li>
                            <img src="/parceiros/fiocruz.png" alt="" />
                        </li>
                        <li>
                            <img src="/parceiros/idt.png" alt="" />
                        </li>
                        <li>
                            <img src="/parceiros/thorax.png" alt="" />
                        </li>
                        <li>
                            <img src="/parceiros/ufrj.png" alt="" />
                        </li>
                        <li>
                            <img src="/parceiros/uff.png" alt="" />
                        </li>
                        <li>
                            <img src="/parceiros/fiotec.png" alt="" />
                        </li>
                        <li>
                            <img src="/parceiros/unimed.png" alt="" />
                        </li>
                    </ul>
                </div>
        </main>
    );
}
