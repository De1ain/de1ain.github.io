import React from 'react';

import styles from './MyProjects.module.css';

const MyProjects = () => {
    return (
        <section className={styles['my-projects']} id="my-projects">
            <header>
                <h3>My Projects</h3>
                <p>A selection of my projects</p>
            </header>
            <div className={styles.portfolio}>
                <div className={styles.portfolio__item}>
                    <h4>Project Title</h4>
                    <p>Project description. Technologies used.</p>
                    <span>Link to repo</span>
                </div>
                <div className={styles.portfolio__item}>
                    <h4>Project Title</h4>
                    <p>Project description. Technologies used.</p>
                    <span>Link to repo</span>
                </div>
                <div className={styles.portfolio__item}>
                    <h4>Project Title</h4>
                    <p>Project description. Technologies used.</p>
                    <span>Link to repo</span>
                </div>
                <div className={styles.portfolio__item}>
                    <h4>Project Title</h4>
                    <p>Project description. Technologies used.</p>
                    <span>Link to repo</span>
                </div>
                <div className={styles.portfolio__item}>
                    <h4>Project Title</h4>
                    <p>Project description. Technologies used.</p>
                    <span>Link to repo</span>
                </div>
                <div className={styles.portfolio__item}>
                    <h4>Project Title</h4>
                    <p>Project description. Technologies used.</p>
                    <span>Link to repo</span>
                </div>
            </div>
        </section>
    );
};

export default MyProjects;