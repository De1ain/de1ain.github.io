import React from 'react';
import Link from 'next/link';

import styles from './MyProjects.module.css';
import SectionFooter from './SectionFooter';

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
            <SectionFooter />
        </section>
    );
};

export default MyProjects;