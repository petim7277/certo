import React from 'react';
import { Link } from 'react-router-dom';
import styles from './StoryHelpSection.module.css';

const StoryHelpSection = () => {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.cardsContainer}>
                
                <div className={`${styles.card} ${styles.yellowCard}`}>
                    <h3 className={styles.title}>Read our story</h3>
                    <p className={styles.desc}>Find out why thousands trust Certo to secure their mobile world.</p>
                    <Link to="/company" className={styles.btnBlue}>
                        About us <span>→</span>
                    </Link>
                </div>

                <div className={`${styles.card} ${styles.whiteCard}`}>
                    <h3 className={styles.title}>Help Center</h3>
                    <p className={styles.desc}>Help topics, getting started guides and FAQs.</p>
                    <Link to="/help" className={styles.btnOutline}>
                        Visit help center
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default StoryHelpSection;
