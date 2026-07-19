import './Hamburger.css';
import {useState} from "react";
import {navbarLinks} from "../../constants/navbar-links.ts";
import {useLanguage} from "../../context/language-context.tsx";

export type HamburgerProps = {
    isActive: boolean;
    setIsActive: () => void;
}
const Hamburger = () => {
    const {language, setLanguage} = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleChangeMenu = () => {
        setIsMenuOpen((previousState: boolean) => {
            return !previousState;
        });
    }
    return (
        <>
            <button
                className={`flex lg:hidden hamburger ${isMenuOpen ? "active" : ""}`}
                onClick={() => handleChangeMenu()}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </button>
            {isMenuOpen && (
                <div className="menu absolute top-full left-0 w-full bg-background mt-2 rounded-4xl shadow-2xl lg:hidden">
                    <ul className="flex flex-col py-6">
                        {navbarLinks.find(item => item.location === language)?.data.map((link) => (
                            <li key={link.url}>
                                <a
                                    href={link.url}
                                    className="block px-6 py-4"
                                    onClick={() => handleChangeMenu()}
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                        <div className="px-4">
                            <div className="lang-switch w-25">
                                <button className={`lang-btn ${language === 'ita' ? 'active' : ''}`} data-lang="it" onClick={() => {
                                    setLanguage('ita');
                                    handleChangeMenu();
                                }}>IT</button>
                                <button className={`lang-btn ${language === 'eng' ? 'active' : ''}`} data-lang="en" onClick={() => {
                                    setLanguage('eng');
                                    handleChangeMenu();
                                }}>ENG</button>
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <a
                                className="button-primary mx-6 mt-4 text-center w-50"
                                href="#contact"
                                onClick={() => handleChangeMenu()}
                            >
                                $ contattami
                            </a>
                        </div>

                    </ul>
                </div>
            )}
        </>

    )
}
export default Hamburger;