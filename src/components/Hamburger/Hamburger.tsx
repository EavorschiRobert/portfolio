import './Hamburger.css';
import {useState} from "react";
import {navbarLinks} from "../../constants/navbar-links.ts";

export type HamburgerProps = {
    isActive: boolean;
    setIsActive: () => void;
}
const Hamburger = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleChangeMenu = () => {
        setIsMenuOpen((previousState: boolean) => {
            return !previousState;
        });
    }
    return (
        <>
            <button
                className={`flex md:hidden hamburger ${isMenuOpen ? "active" : ""}`}
                onClick={() => handleChangeMenu()}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </button>
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-background mt-2 rounded-4xl shadow-2xl md:hidden">
                    <ul className="flex flex-col py-6">
                        {navbarLinks.map((link) => (
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

                        <a
                            className="button-primary mx-6 mt-4 text-center"
                            onClick={() => handleChangeMenu()}
                        >
                            $ contattami
                        </a>
                    </ul>
                </div>
            )}
        </>

    )
}
export default Hamburger;