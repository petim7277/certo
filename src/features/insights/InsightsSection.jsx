import React from 'react';
import styles from './InsightsSection.module.css';
import insightImg1 from '../../assets/ash_image.svg';
import insightImg2 from '../../assets/remove_image.png';
import insightImg3 from '../../assets/signs_image.svg';

const InsightsSection = () => {
    const insights = [
        {
            tag: "Expertise",
            title: "Is Someone Listening to Your Phone Calls and How to Stop It",
            desc: "It’s something we see in movies all the time - police technicians hiding in the back of a van with giant headphones, tapes whirring,...",
            img: insightImg1
        },
        {
            tag: "Expertise",
            title: "Oblivion: The New $300 Android RAT That Beats Every Major Phone Manufacturer's Security",
            desc: "Oblivion, a newly emerged Android Remote Access Trojan (RAT), is being positioned as exactly that. Certo's security researchers have been...",
            img: insightImg2
        },
        {
            tag: "Guides",
            title: "How Do I Know if My Husband or Wife Is Spying on My Phone?",
            desc: "When we think of a hacker, we might imagine someone in a foreign country. Someone living a very different life to ourselves. Someone who...",
            img: insightImg3
        }
    ];

    return (
        <section className={styles.sectionWrapper}>
            <h2 className={styles.title}>Latest insights</h2>

            <div className={styles.cardsContainer}>
                {insights.map((insight, index) => (
                    <div key={index} className={styles.insightCard}>
                        <div className={styles.imgContainer}>
                            <img src={insight.img} alt={insight.title} className={styles.cardImg} />
                            <span className={styles.tag}>{insight.tag}</span>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.cardTitle}>{insight.title}</h3>
                            <p className={styles.cardDesc}>{insight.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <a href="#insights" className={styles.viewAllBtn} style={{ textDecoration: 'none' }}>
                View all insights <span>→</span>
            </a>
        </section>
    );
};

export default InsightsSection;
