import React from "react";
import styles from "./About.module.css";

function About()
{
    return (
        <section className={styles.about} id="about">
            <h2 className={styles.title}>Sobre Mim</h2>
            <div className={styles.aboutContent}>
                <p>
                    Sou desenvolvedor de software. Construo aplicações web escaláveis no full-stack e também trabalho em baixo nível. Gosto de entender como o software roda no hardware, porque é isso que gera performance de verdade. Contribuo com open source.
                </p>
            </div>
        </section>
    );
}

export default About;
