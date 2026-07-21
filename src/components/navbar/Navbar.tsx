import './Navbar.css';
import {navbarLinks} from "../../constants/navbar-links.ts";
import Hamburger from "../Hamburger/Hamburger.tsx";
import {useLanguage} from "../../context/language-context.tsx";
import {motion, useMotionValueEvent, useScroll} from 'motion/react';
import {useState} from "react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage } = useLanguage();
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 30);
    });

    return (
        <motion.nav
            animate={{
                // height: scrolled ? 64 : 80,
                // paddingInline: scrolled ? 24 : 48,
                marginTop: scrolled ? -15 : 0,
                // paddingBlock: scrolled ? 12 : 20,
            }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
            }}
        >
            <span className="font-bold flex heading">
                <p>
                    robertdaniel
                </p>
                <p className="text-accent">.</p>
                <p>eavorschi</p>
            </span>
            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-8 text-sm">
                <ul className="flex gap-8 text-muted">
                    {
                        navbarLinks.find((item) => item.location === language)?.data.map((link) => (
                        <motion.li
                            whileHover={{scale: 1.2}}
                            key={link.url}>
                            <a href={link.url}>{link.title}</a>
                        </motion.li>
                    ))}
                </ul>
                <div className="lang-switch">
                    <button className={`lang-btn ${language === 'ita' ? 'active' : ''}`} data-lang="it" onClick={() => setLanguage('ita')}>IT</button>
                    <button className={`lang-btn ${language === 'eng' ? 'active' : ''}`} data-lang="en" onClick={() => setLanguage('eng')}>ENG</button>
                </div>
                <a className="button-primary px-4 font-code" href="#contact">
                    $ {language === 'eng' ? 'contact-me' : 'contattami'}
                </a>
            </div>

            {/* Mobile */}
            <Hamburger/>

        </motion.nav>
    )
}
export default Navbar;