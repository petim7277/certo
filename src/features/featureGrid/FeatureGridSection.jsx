import React from 'react';
import styles from './FeatureGridSection.module.css';
import figure_8 from '../../assets/figure_8.svg';
import figure_7 from '../../assets/figure_7.svg';
import figure_9 from '../../assets/figure_9.svg';
import figure_10 from '../../assets/figure_10.svg';
import figure_11 from '../../assets/figure_11.svg';
import figure_12 from '../../assets/figure_12.svg';


const FeatureGridSection = () => {
    const features = [
        {
            title: "Spyware detection",
            description: "Our advanced spyware detection engine can identify if a hidden camera, spyware or bugging software.",
            icon: figure_7
        },
        {
            title: "Keylogger detection",
            description: "Find malicious keyboards installed on your device that could allow someone to record things you type (e.g. passwords).",
            icon: figure_8
        },
        {
            title: "Find tracking apps",
            description: "Check which apps can access your location, microphone or camera. Get alerted if a hidden tracking app is installed.",
            icon: figure_9
        },
        {
            title: "OS integrity check",
            description: "Analyze your operating system for signs of tampering that could compromise security, such as Jailbreaking.",
            icon: figure_10
        },
        {
            title: "Threat removal",
            description: "Our intelligent scan will either safely remove threats for you or provide easy to follow instructions.",
            icon: figure_11
        },
        {
            title: "Easy to use",
            description: "We create easy to use apps that can check your device for vulnerabilities in a matter of minutes.",
            icon: figure_12
        }
    ];

    return (
        <section className={styles.sectionWrapper}>
            <h2 className={styles.title}>
                Get your freedom back, stop mobile<br />spyware today
            </h2>

            <div className={styles.gridCard}>
                <div className={styles.gridContainer}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.featureItem}>
                            <img src={feature.icon} alt={feature.title} className={styles.icon} />
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDesc}>{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.buttonGroup}>
                    <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnPrimary}`} style={{ textDecoration: 'none' }}>
                        Get Certo for iPhone <span>→</span>
                    </a>
                    <a href="https://play.google.com" target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnSecondary}`} style={{ textDecoration: 'none' }}>
                        Get Certo for Android
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeatureGridSection;
