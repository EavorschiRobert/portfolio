import './Navbar.css';
import {navbarLinks} from "../../constants/navbar-links.ts";
import Hamburger from "../Hamburger/Hamburger.tsx";
import {useLanguage} from "../../context/language-context.tsx";

const Navbar = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <nav>
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
                        <li key={link.url}>
                            <a href={link.url}>{link.title}</a>
                        </li>
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

        </nav>
    )
}
export default Navbar;