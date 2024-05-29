import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Salut, je suis Matou</h1>
        <p className={styles.description}>
          Je suis développeur full-stack avec 1 mois d'expérience en utilisant React et NodeJS. N'hésitez pas à me contacter si vous souhaitez en savoir plus !
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contactez-moi
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Image de moi en vedette"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
