import React from 'react';
import styles from './CallToActionSection.module.css';

const CallToActionSection = () => {
    return (
        <section className={styles.sectionWrapper}>
            <h2 className={styles.title}>Is someone spying on your phone?</h2>
            <p className={styles.subtitle}>Find out with Certo</p>
            
            <div className={styles.buttonGroup}>
                <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnPrimary}`} style={{textDecoration: 'none'}}>
                    Get Certo for iPhone <span>→</span>
                </a>
                <a href="https://play.google.com" target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnOutline}`} style={{textDecoration: 'none'}}>
                    Get Certo for Android
                </a>
            </div>
        </section>
    );
};

export default CallToActionSection;
