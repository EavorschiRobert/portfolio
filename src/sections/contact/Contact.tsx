import type {SectionProps} from "../../types/section-props.ts";
import {useLanguage} from "../../context/language-context.tsx";
import './Contact.css';
import Terminal from "../../components/terminal/Terminal.tsx";
import SectionWrapper from "../../components/layout/SectionLayout.tsx";
import {useRef} from "react";
import {motion, useInView} from "motion/react";
import {useTerminalTypewriter} from "../../utils/use-terminal-typewriter.ts";

const Contact = ({index, italianTitle, englishTitle}: SectionProps) => {
    const {language} = useLanguage();
    const terminalRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(terminalRef, {once: true, amount: 0.5});

    const command = language === 'ita'
        ? 'send-email --to robert --subject "Ciao!"'
        : 'send-email --to robert --subject "Hello!"';

    const {done, typedLength} = useTerminalTypewriter([command], {active: inView, speed: 28, startDelay: 200});

    return (
        <div className="
        h-full w-full flex flex-col
        lg:flex-row justify-between gap-8
        items-center"
        >
            <div>
                <span>
                    <p className="text-accent font-code text-sm">{language === 'ita' ? `${index} - ${italianTitle}` : `${index} - ${englishTitle}`}</p>
                    <p className="font-heading text-3xl md:text-6xl mb-6">
                        {language === 'ita' ? 'Pronto a ' : 'Ready to '}
                        <br/>
                        <em className="text-accent">
                            {language === 'ita' ? 'collaborare?' : 'collaborate?'}
                        </em>
                    </p>
                </span>

                <span>
                    <p className="text-muted">
                        {language === 'ita'
                            ? 'Sono sempre aperto a nuove opportunità e collaborazioni interessanti. Scrivimi pure.'
                        : 'I’m always open to new opportunities and interesting collaborations. Feel free to reach out.'}

                    </p>
                </span>
            </div>
            <div className="w-full lg:w-1/2">
                <Terminal>
                    <span ref={terminalRef} className="font-code p-4">
                        <span className="text-terminal-fg flex gap-2 break-word">
                            <p className="text-accent">$</p>
                            <p>
                                {command.slice(0, typedLength(0))}
                                <em className="text-accent terminal-cursor"></em>
                            </p>
                        </span>
                        {done && (
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: .4}}
                            >
                                <p className="text-muted">
                                    {language === 'ita' ? 'Apertura del client di posta...' : 'Opening mail client…'}
                                </p>
                                <motion.a
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: .4, delay: .35}}
                                    className="send-mail text-string cursor-pointer"
                                    href="mailto:eavorschirobertdaniel@gmail.com"
                                >
                                    {language === 'ita' ? '→ esegui: eavorschirobertdaniel@gmail.com' : '→ run: eavorschirobertdaniel@gmail.com'}
                                </motion.a>
                            </motion.div>
                        )}
                    </span>
                </Terminal>
            </div>
        </div>
    )
}
export default SectionWrapper(Contact, "contact");