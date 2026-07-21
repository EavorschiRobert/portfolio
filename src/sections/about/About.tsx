import Terminal from "../../components/terminal/Terminal.tsx";
import {counterAttivita} from "../../constants/counter-attivita.ts";
import {useLanguage} from "../../context/language-context.tsx";
import SectionTitle from "../../components/section-title/SectionTitle.tsx";
import type {SectionProps} from "../../types/section-props.ts";
import {aboutJson} from "../../constants/about-json.ts";
import SectionWrapper from "../../components/layout/SectionLayout.tsx";
import CounterItem from "../../components/counter-item/CounterItem.tsx";
import {useRef} from "react";
import {useInView} from "motion/react";
import {useTerminalTypewriter} from "../../utils/use-terminal-typewriter.ts";

const About = ({index, italianTitle, englishTitle}: SectionProps) => {
    const {language} = useLanguage();
    const terminalRef = useRef<HTMLPreElement>(null);
    const inView = useInView(terminalRef, {once: true, amount: 0.4});
    const countersRef = useRef<HTMLDivElement>(null);
    const countersInView = useInView(countersRef, {once: true, amount: 0.4});

    const items = aboutJson[0].data;
    const lines = [
        '// profile.ts',
        'const dev = {',
        ...items.map((item, i) => {
            const open = item.type === 'list' ? '[' : '';
            const close = item.type === 'list' ? ']' : '';
            const comma = i < items.length - 1 ? ',' : '';
            return `${item.title}: ${open}'${item.content}'${close}${comma}`;
        }),
        '};',
    ];

    const {isLineTyped, isLineActive, typedLength} = useTerminalTypewriter(lines, {
        active: inView,
        speed: 14,
        lineDelay: 120,
        startDelay: 300,
    });

    return(
        <div>
            <SectionTitle title={language === 'ita' ? `${index} - ${italianTitle}` : `${index} - ${englishTitle}`}  subtitle={'About me'}/>
            <div className="w-full flex flex-col justify-between items-start gap-4 lg:gap-12 lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <Terminal>
                        <pre ref={terminalRef} className="px-4
                            font-code
                            whitespace-pre-wrap
                            wrap-break-word
                            overflow-hidden"
                                >
                            {lines.map((line, i) => {
                                if (!isLineTyped(i) && !isLineActive(i)) return null;

                                if (!isLineTyped(i)) {
                                    return (
                                        <p key={i} className={i === 0 ? "text-muted" : "text-terminal-fg"}>
                                            {line.slice(0, typedLength(i))}
                                            <em className="text-accent terminal-cursor"></em>
                                        </p>
                                    );
                                }

                                if (i === 0) {
                                    return <p key={i} className="text-muted">{line}</p>;
                                }
                                if (i === 1) {
                                    return (
                                        <span key={i} className="flex gap-2">
                                            <p className="text-accent">const</p>
                                            <p className="text-panel">dev = {'{'}</p>
                                        </span>
                                    );
                                }
                                if (i === lines.length - 1) {
                                    return <p key={i} className="text-panel">{'};'}</p>;
                                }

                                const item = items[i - 2];
                                const isLast = i - 2 === items.length - 1;
                                return (
                                    <div className="flex flex-wrap gap-2" key={i}>
                                        <p className="text-panel pl-4">{item.title}:</p>
                                        {item.type === 'list' && (
                                            <p className="text-panel">[</p>
                                        )}
                                        <p className="text-string wrap-break-word">{"'"+item.content+"'"}</p>
                                        {item.type === 'list' && (
                                            <p className="text-panel">]</p>
                                        )}
                                        {!isLast && (
                                            <p className="text-panel">,</p>
                                        )}
                                    </div>
                                );
                            })}
                        </pre>
                    </Terminal>
                </div>

                <div className="w-full lg:w-1/2 text-muted flex flex-col justify-between gap-8 wrap-break-word">
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

                    <div ref={countersRef} className="
                            flex
                            flex-wrap
                          justify-between
                          gap-8"
                    >
                        {counterAttivita.find(item => item.location === language)?.data.map((item, index) => (
                            <CounterItem key={index} title={item.title} content={item.content} active={countersInView}/>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
export default SectionWrapper(About, "about");