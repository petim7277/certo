import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBarSection.module.css";
import logo_image from "../../../assets/logo.svg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [menuOpen]);

    const navItems = [
        { name: "iPhone", path: "/iphone" },
        { name: "Android", path: "/android" },
        { name: "Help", path: "/help" }
    ];

    return (
        <>
            <nav className={styles.NavCont}>
                <div className={styles.NavLogo}>
                    <Link to="/">
                        <img src={logo_image} alt="Logo" />
                    </Link>
                </div>

                <div className={styles.desktopLinks}>
                    {navItems.map((item) => (
                        <Link key={item.name} to={item.path} className={styles.navLink}>
                            {item.name}
                        </Link>
                    ))}

                    <div className={styles.dropdownContainer}>
                        <Link to="/company" className={styles.navLink}>
                            Company <span className={styles.dropdownArrow}>▼</span>
                        </Link>
                        <div className={styles.dropdownMenu}>
                            <Link to="/company" className={styles.dropdownItem}>About</Link>
                            <Link to="/#insights" className={styles.dropdownItem}>Insights</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.rightSection}>
                    <Link to="/signin" className={`${styles.main_button} ${styles.desktopBtn}`}>
                        Sign in
                    </Link>

                    <div
                        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className={styles.line1}></span>
                        <span className={styles.line2}></span>
                        <span className={styles.line3}></span>
                    </div>
                </div>
            </nav>

            <div className={`${styles.glossyOverlay} ${menuOpen ? styles.open : ""}`}>
                <div className={styles.glossyTab}>
                    <div className={styles.mobileLogoCont}>
                        <img src={logo_image} alt="Logo" />
                    </div>
                    <div className={styles.mobileLinks}>
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setMenuOpen(false)}
                                className={styles.navLinkMobile}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link to="/company" onClick={() => setMenuOpen(false)} className={styles.navLinkMobile}>About</Link>
                        <Link to="/#insights" onClick={() => setMenuOpen(false)} className={styles.navLinkMobile}>Insights</Link>
                        <Link to="/resources" onClick={() => setMenuOpen(false)} className={styles.navLinkMobile}>Resources</Link>
                    </div>
                    <Link to="/signin" className={`${styles.main_button} ${styles.mobileBtn}`} onClick={() => setMenuOpen(false)}>
                        Sign in
                    </Link>
                </div>
                <div className={styles.backdrop} onClick={() => setMenuOpen(false)} />
            </div>
        </>
    );
};

export default Navbar;