import './Hero.css';
import {technologies} from "../../constants/technologies.ts";
import Technology from "../../components/technology/Technology.tsx";
import {useLanguage} from "../../context/language-context.tsx";
import type {SectionProps} from "../../types/section-props.ts";

const Hero = (_: SectionProps) => {
    const { language } = useLanguage();
    return(
        <div id="hero" className="w-full h-full flex justify-center items-start flex-col">
            <p className="text-accent font-code terminal-cursor md:text-sm text-xs">$ whoami</p>
            <p className="font-heading leading-none md:text-6xl text-4xl">
                Eavorschi Robert Daniel
            </p>
            <p className="leading-none font-heading text-accent italic md:text-6xl text-4xl">
                Tech Lead & Full Stack Developer.
            </p>
            {
                language === 'ita'
                ? (
                        <p>
                            Progetto soluzioni software e guido il team che le realizza.<br/>
                            3 anni di esperienza come sviluppatore full stack, con un focus recente su<br/>
                            architettura e team leadership.
                        </p>
                    )
                    : (
                        <p>
                            I design software solutions and lead the team that builds them.<br/>
                            3 years of experience as a full stack developer, with a recent focus on<br/>
                            architecture and team leadership.
                        </p>
                    )
            }

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