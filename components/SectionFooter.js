import React from 'react';
import Link from 'next/link';

import styles from './SectionFooter.module.css';
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SectionFooter = () => {
    return (
        <footer className={styles.footer}>
            <Link href="#top">
                <a className={styles['back-to-top-link']}>
                    <FontAwesomeIcon icon={faAngleUp} />
                    <br />Back to top
                </a>
            </Link>
        </footer>
    );
};

export default SectionFooter;