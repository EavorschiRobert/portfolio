import './Navbar.css';
import {navbarLinks} from "../../constants/navbar-links.ts";
import Hamburger from "../Hamburger/Hamburger.tsx";

const Navbar = () => {

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
            <div className="hidden md:flex items-center gap-8 text-sm">
                <ul className="flex gap-8 text-muted">
                    {navbarLinks.map((link) => (
                        <li key={link.url}>
                            <a href={link.url}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                <a className="button-primary px-4 font-code">
                    $ contattami
                </a>
            </div>

            {/* Mobile */}
            <Hamburger/>

        </nav>
    )
}
export default Navbar;