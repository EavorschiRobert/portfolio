import type {SectionProps} from "../../types/section-props.ts";
import {useLanguage} from "../../context/language-context.tsx";
import './Contact.css';
import Terminal from "../../components/terminal/Terminal.tsx";

const Contact = ({index, italianTitle, englishTitle}: SectionProps) => {
    const {language} = useLanguage();
    return (
        <div id="contact" className="
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
            <div>
                <Terminal>
                    <span className="font-code p-4">
                        <span className="text-terminal-fg flex gap-2 break-word">
                            <p className="text-accent">$</p>
                            {language === 'ita'
                                ? (
                                    <p>
                                        send-email --to robert --subject "Ciao!"
                                        <em className="text-accent terminal-cursor"></em>
                                    </p>
                                )
                                : (
                                    <p>
                                        send-email --to robert --subject "Hello!"
                                        <em className="text-accent terminal-cursor"></em>
                                    </p>
                                )}

                        </span>
                        {language === 'ita'
                        ? (
                            <>
                                <p className="text-muted">Apertura del client di posta...</p>
                                <a className="send-mail text-string cursor-pointer" href="mailto:eavorschirobertdaniel@gmail.com">→ esegui: eavorschirobertdaniel@gmail.com</a>
                            </>
                            )
                        : (
                            <>
                                <p className="text-muted">Opening mail client…</p>
                                <a className="send-mail text-string cursor-pointer" href="mailto:eavorschirobertdaniel@gmail.com">→ run: eavorschirobertdaniel@gmail.com</a>
                            </>
                            )}

                    </span>
                </Terminal>
            </div>
        </div>
    )
}
export default Contact;