import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>À propos</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Moi assis avec un ordinateur portable"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Icône de curseur" />
            <div className={styles.aboutItemText}>
              <h3>Développeur Frontend</h3>
              <p>
                Je suis développeur frontend avec de l'expérience dans la création de sites réactifs et optimisés.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Icône de serveur" />
            <div className={styles.aboutItemText}>
              <h3>Développeur Backend</h3>
              <p>
                J'ai de l'expérience dans le développement de systèmes backend et d'API rapides et optimisés.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Icône UI" />
            <div className={styles.aboutItemText}>
              <h3>Designer UI</h3>
              <p>
                J'ai conçu plusieurs pages de destination et j'ai également créé des systèmes de conception.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};