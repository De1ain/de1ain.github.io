import React from 'react';
import Link from 'next/link';

import styles from './MyProjects.module.css';
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyProjects = () => {
    return (
        <section className={styles['my-projects']} id="my-projects">
            <header>
                <h1>My Projects</h1>
                <p>A selection of my projects</p>
            </header>
            <div className={styles.portfolio}>
                <div className={styles.portfolio__elem}>
                    <div className={styles.portfolio__item}>
                        <h4>Project Title</h4>
                        <p>Project description. Technologies used.</p>
                        <span>Link to repo</span>
                    </div>
                </div>
                <div className={styles.portfolio__elem}>
                    <div className={styles.portfolio__item}>
                        <h4>Project Title</h4>
                        <p>Project description. Technologies used.</p>
                        <span>Link to repo</span>
                    </div>
                </div>
                <div className={styles.portfolio__elem}>
                    <div className={styles.portfolio__item}>
                        <h4>Project Title</h4>
                        <p>Project description. Technologies used.</p>
                        <span>Link to repo</span>
                    </div>
                </div>
                <div className={styles.portfolio__elem}>
                    <div className={styles.portfolio__item}>
                        <h4>Project Title</h4>
                        <p>Project description. Technologies used.</p>
                        <span>Link to repo</span>
                    </div>
                </div>
                <div className={styles.portfolio__elem}>
                    <div className={styles.portfolio__item}>
                        <h4>Project Title</h4>
                        <p>Project description. Technologies used.</p>
                        <span>Link to repo</span>
                    </div>
                </div>
                <div className={styles.portfolio__elem}>
                    <div className={styles.portfolio__item}>
                        <h4>Project Title</h4>
                        <p>Project description. Technologies used.</p>
                        <span>Link to repo</span>
                    </div>
                </div>
            </div>
            <footer className={styles.footer}>
                <Link href="#top">
                    <a className={styles['back-to-top-link']}>
                        <FontAwesomeIcon icon={faAngleUp} />
                        <br />Back to top
                    </a>
                </Link>
            </footer>
        </section>
    );
};

export default MyProjects;