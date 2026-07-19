import type {SectionProps} from "../../types/section-props.ts";
import SectionTitle from "../../components/section-title/SectionTitle.tsx";
import {useLanguage} from "../../context/language-context.tsx";
import './Istruzione.css';
import {education} from "../../constants/education.ts";
import type {Education} from "../../types/education.type.ts";
import SectionWrapper from "../../components/layout/SectionLayout.tsx";

const Istruzione = ({index, italianTitle, englishTitle}: SectionProps) => {
    const {language} = useLanguage();
    return(
        <div>
            <SectionTitle title={language === 'ita' ? `${index} - ${italianTitle}` : `${index} - ${englishTitle}`}  subtitle={'Education'}/>
            <div className="education-grid">
                {education.find(item => item.location === language)?.data.map((item: Education) => (
                    <div id="skill-card" className="
                    bg-panel p-8 rounded-2xl border border-line
                    shadow-lg
                    " key={item.title}>
                        <p className="font-code text-xs text-accent mb-4">{item.fromDate} - {item.toDate}</p>
                        <p className="font-heading text-terminal-bg font-bold text-xl lg:text-3xl">{item.title}</p>
                        <p className="text-muted text-sm mb-4">{item.subtitle}</p>
                        <p className="text-muted">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SectionWrapper(Istruzione, "education");