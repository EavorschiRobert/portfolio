import './Hero.css';
import {technologies} from "../../constants/technologies.ts";
import Technology from "../../components/technology/Technology.tsx";

const Hero = () => {
    return(
        <div id="hero" className="w-full h-full flex justify-center items-start flex-col">
            <p className="text-accent font-code terminal-cursor md:text-sm text-xs">$ whoami</p>
            <p className="font-heading leading-none md:text-6xl text-4xl">
                Eavorschi Robert Daniel
            </p>
            <p className="leading-none font-heading text-accent italic md:text-6xl text-4xl">
                Tech Lead & Full Stack Developer.
            </p>
            <p>
                Progetto soluzioni software e guido il team che le realizza.<br/>
                3 anni di esperienza come sviluppatore full stack, con un focus recente su<br/>
                architettura e team leadership.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
                {technologies.map((technology) => (
                    <span key={technology}>
                      <Technology title={technology}/>
                    </span>

                ))}
            </div>
        </div>
    )
}
export default Hero;