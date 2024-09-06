import React from 'react';
import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils"

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}><h1 className={styles.title}>Hi, I'm Atharva</h1>
        <p className={styles.description}>I'm a passionate developer with 
            experience building both the front-end and back-end of web 
            applications. I enjoy crafting user-friendly interfaces and 
            ensuring seamless functionality behind the scenes.</p>
        <a href="mailto:balleatharva@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero-image" className={styles.heroImg}/>
         <div className={styles.topBlur} />
         <div className={styles.bottomBlur} />
    </section>;
};