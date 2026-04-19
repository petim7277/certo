import React from 'react';
import styles from './FeatureDetailSection.module.css';
import featureImg from '../../assets/yellow.svg';

const FeatureDetailSection = () => {
    return (
        <section className={styles.sectionWrapper}>
            <div className={styles.contentSide}>
                <h2 className={styles.title}>
                    At Certo, mobile security is not an afterthought, it's what we do.
                </h2>
                <p className={styles.description}>
                    With years of experience in mobile security and spyware detection, our products have helped countless people safeguard their devices and find peace of mind.
                </p>

                <div className={styles.buttonGroup}>
                    <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnPrimary}`} style={{ textDecoration: 'none' }}>
                        Get Certo for iPhone <span>→</span>
                    </a>
                    <a href="https://play.google.com" target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnSecondary}`} style={{ textDecoration: 'none' }}>
                        Get Certo for Android
                    </a>
                </div>
            </div>

            <div className={styles.imageSide}>
                <div className={styles.imageContainer}>
                    <img src={featureImg} alt="Mobile security" />
                </div>
            </div>
        </section>
    );
};

export default FeatureDetailSection;
