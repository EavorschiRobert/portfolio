import Terminal from "../../components/terminal/Terminal.tsx";
import {counterAttivita} from "../../constants/counter-attivita.ts";
import {useLanguage} from "../../context/language-context.tsx";
import SectionTitle from "../../components/section-title/SectionTitle.tsx";
import type {SectionProps} from "../../types/section-props.ts";
import {aboutJson} from "../../constants/about-json.ts";
import type {JsonContent} from "../../types/about-json.type.ts";

const About = ({index, italianTitle, englishTitle}: SectionProps) => {
    const {language} = useLanguage();
    return(
        <div id="about">
            <SectionTitle title={language === 'ita' ? `${index} - ${italianTitle}` : `${index} - ${englishTitle}`}  subtitle={'About me'}/>
            <div className="w-full flex flex-col justify-between items-start gap-4 lg:gap-12 lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <Terminal>
                        <pre className="px-4
                            font-code
                            whitespace-pre-wrap
                            break-words
                            overflow-hidden"
                                >
                            <p className="text-muted">// profile.ts</p>
                            <span className="flex gap-2">
                                <p className="text-accent">const</p>
                                <p className="text-panel">dev = {'{'}</p>
                            </span>
                                    {aboutJson[0].data.map((item: JsonContent, i: number) => (
                                        <div className="flex flex-wrap gap-2" key={i}>
                                            <p className="text-panel pl-4">{item.title}:</p>
                                            {item.type === 'list' && (
                                                <p className="text-panel">[</p>
                                            )}
                                            <p className="text-string wrap-break-word">{"'"+item.content+"'"}</p>
                                            {item.type === 'list' && (
                                                <p className="text-panel">]</p>
                                            )}
                                            {i < (aboutJson.length - 1) && (
                                                <p className="text-panel">,</p>
                                            )}
                                        </div>
                                    ))}
                                    <p className="text-panel">{'};'}</p>
                        </pre>
                    </Terminal>
                </div>

                <div className="lg:w-1/2 text-muted flex flex-col justify-between gap-8 ">
                    <span>
                        {
                            language === 'ita'
                            ? (
                                <>
                                    <p className="font-heading text-2xl">
                                        Progetto
                                        <em className="text-accent"> architetture software </em>
                                        e guido i team che le costruiscono.
                                    </p>
                                    <p>Sono un tech lead e sviluppatore full stack con 3 anni di esperienza.
                                        Nell'ultimo anno mi sono concentrato sulla progettazione di soluzioni
                                        software — definendo l'architettura dei sistemi e le scelte tecniche — guidando
                                        poi il team nella loro realizzazione.
                                    </p>
                                </>

                                )
                            : (
                                <>
                                    <p className="font-heading text-2xl">
                                        I design
                                        <em className="text-accent"> software architectures </em>
                                        and lead the teams that build them.
                                    </p>
                                    <p>I'm a tech lead and full stack developer with 3 years of experience.
                                        Over the last year I've focused on designing software solutions —
                                        defining system architecture and technical direction — then leading
                                        the team through delivery.
                                    </p>
                                </>
                                )
                        }



                    </span>

                    <div className="flex
                          justify-between
                          gap-8"
                    >
                        {counterAttivita.find(item => item.location === language)?.data.map((item, index) => (
                            <span className="border-t border-line" key={index}>
                                    <p className="text-accent text-2xl md:text-4xl font-heading font-bold mt-4">{item.title}</p>
                                    <p className="break-all text-sm md:text-xl">{item.content}</p>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
export default About;