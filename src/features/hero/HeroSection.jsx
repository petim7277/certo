import React from 'react';
import styles from './HeroSection.module.css';
import person_img from '../../assets/home-header-2.svg';
import dashboard_img from '../../assets/android-dashboard-certo.svg';

const Hero = () => {
    return (
        <section className={styles.heroOuterContainer}>
            <div className={styles.contentSide}>
                <h1 className={styles.title}>
                    Your mobile privacy <br /> is our mission
                </h1>
                <p className={styles.subtitle}>
                    Think your phone has been hacked? Our trusted apps make it
                    easy for you to scan, detect and remove threats from your
                    iPhone and Android devices.
                </p>
                <div className={styles.buttonGroup}>
                    <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnPrimary}`} style={{textDecoration: 'none'}}>
                        Get Certo for iPhone <span>→</span>
                    </a>
                    <a href="https://play.google.com" target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnSecondary}`} style={{textDecoration: 'none'}}>
                        Get Certo for Android
                    </a>
                </div>
            </div>

            <div className={styles.imageSide}>
                <div className={styles.visualWrapper}>
                    <div className={styles.orangeBox}>
                        <img
                            src={person_img}
                            alt="Background person"
                            className={styles.personImg}
                        />
                        <img
                            src={dashboard_img}
                            alt="Phone dashboard"
                            className={styles.phoneImg}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;