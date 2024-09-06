import React from "react";

import styles from "./About.module.css";
import {getImageUrl} from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src ={getImageUrl('about/aboutImage.png')} 
                alt=" Me sitting with a laptop " 
                className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Fullstack Developer</h3>
                            <p>I leverage my full-stack development expertise to bridge the
                                 gap between front-end and back-end technologies, crafting seamless 
                                 and user-friendly software solutions from design to deployment.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Software Developer</h3>
                            <p>I collaborate with stakeholders to understand user needs, 
                                and then craft user-focused software solutions by meticulously
                                 designing, developing, and implementing innovative technologies.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>I craft user interfaces that not only look beautiful but also 
                                intuitively guide users towards their goals, creating a delightful 
                                and engaging user experience.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )

} 