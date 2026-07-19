import SectionTitle from "../../components/section-title/SectionTitle.tsx";
import './Esperienza.css';
import {useLanguage} from "../../context/language-context.tsx";
import {experiences} from "../../constants/experiences.ts";
import type {SectionProps} from "../../types/section-props.ts";

const Esperienza = ({index, italianTitle, englishTitle}: SectionProps) => {
    const {language} = useLanguage();

    return(
        <div id="esperienza" className="w-full">
            <SectionTitle title={language === 'ita' ? `${index} - ${italianTitle}` : `${index} - ${englishTitle}`}  subtitle={'Experience'}/>
            {experiences.find(item => item.location === language)?.data.map((item, i) => (
                <div className="bg-panel p-8 rounded-2xl border border-line" key={i}>
                    <div className="flex-col lg:flex-row items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="">
                                <img alt={item.title} src={item.imageUrl} className="h-8 w-8 lg:h-12 lg:w-12"/>
                            </span>
                            <p className="text-xl lg:text-4xl font-bold font-heading">{item.title}</p>
                        </div>
                        <div>
                            <p className="text-accent font-code text-xs lg:text-sm">{item.fromDate} - {item.toDate}</p>
                        </div>
                    </div>
                    <div className="timeline">
                        {item.steps.map((step) => (
                            <div className="t-item reveal visible" key={step.title}>
                                <div className="text-accent text-xs">{step.fromDate} - {step.toDate}</div>
                                <p className="text-2xl font-bold font-heading">{step.title}</p>
                                <p className="text-muted">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    )
}
export default Esperienza;