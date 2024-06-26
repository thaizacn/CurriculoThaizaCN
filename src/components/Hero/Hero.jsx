import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Oi, eu sou a Thai!</h1>
        <p className={styles.description}>
          Desenvolvedora backend com 3 anos de 
          experiência em Java com Spring e Camel.
        </p>
        <a href="thaizacarvalh@gmail.com" className={styles.contactBtn}>
          Entre em contato!
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
