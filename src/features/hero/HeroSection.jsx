import React from 'react';
import styles from './HeroSection.module.css';
import person_img from '../../assets/home-header-2.svg';
import dashboard_img from '../../assets/android-dashboard-certo.svg';

const Hero = () => {
    console.log("HERO COMPONENT UPDATED - GRID ACTIVE");
    return (
        <section
            className={styles.heroContainer}
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(550px, 1fr))',
                alignItems: 'center',
                width: '100%',
                minHeight: '100vh',
                padding: '4rem 8%',
                background: '#E8F1FF', // Slightly different blue to verify update
                overflow: 'hidden',
                position: 'relative',
                maxWidth: '1800px',
                margin: '0 auto',
                gap: '6rem'
            }}
        >
            <div className={styles.heroContent} style={{ zIndex: 10, minWidth: 0 }}>
                <h1 className={styles.title} style={{
                    fontSize: 'clamp(2.2rem, 4.5vw, 4.2rem)',
                    color: '#02033B',
                    lineHeight: '1.2',
                    fontWeight: '800',
                    whiteSpace: 'normal',
                    maxWidth: '600px',
                    wordBreak: 'break-word',
                    margin: 0,
                    marginBottom: '2rem'
                }}>
                    Your mobile privacy is our mission
                </h1>
                <p className={styles.subtitle}>
                    Think your phone has been hacked? Our trusted apps make it
                    easy for you to scan, detect and remove threats from your
                    iPhone and Android devices.
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

            <div className={styles.heroImage} style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
                paddingLeft: '5%'
            }}>
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