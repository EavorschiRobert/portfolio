import SectionTitle from "../../components/section-title/SectionTitle.tsx";
import './Esperienza.css';
import {useLanguage} from "../../context/language-context.tsx";
import {experiences} from "../../constants/experiences.ts";
import type {SectionProps} from "../../types/section-props.ts";
import SectionWrapper from "../../components/layout/SectionLayout.tsx";
import Card from "../../components/card/Card.tsx";
import Modal from "../../components/modal/Modal.tsx";
import {useState} from "react";
import type {Experience} from "../../types/experience.type.ts";

const Esperienza = ({index, italianTitle, englishTitle}: SectionProps) => {
    const {language} = useLanguage();
    const [modalContent, setModalContent] = useState<Experience | undefined>(undefined);
    return(
        <div className="w-full">
            <SectionTitle title={language === 'ita' ? `${index} - ${italianTitle}` : `${index} - ${englishTitle}`}  subtitle={'Experience'}/>
            {experiences.find(item => item.location === language)?.data.map((item, i) => (
                <Card key={i}>
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
                                <p className="text-muted">{step.shortDescription}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex w-full justify-end">
                        <p className="btn-action text-sm text-accent cursor-pointer" onClick={() => setModalContent(() => item)}>Dettagli →</p>
                    </div>
                </Card>

            ))}
            {modalContent&& (
                <Modal title={modalContent.title}
                       subtitle={`${modalContent.fromDate} - ${modalContent.toDate}`}
                       onClose={() => setModalContent(undefined)}>
                    <div>
                        {modalContent.steps.map((item, index) => (
                            <div key={index} className="mt-4">
                                <span className="flex lg:gap-4 flex-col lg:flex-row mb-4 lg:items-center">
                                    <p className="font-bold text-2xl font-heading">{item.title}</p>
                                    <p className="text-xs text-accent">{item.fromDate} - {item.toDate}</p>
                                </span>
                                {item.description.map((item, j) => (
                                    <span key={`${index}-${j}`}>
                                        <p className="text-muted text-sm">{item}</p>
                                        <br/>
                                    </span>

                                ))}
                            </div>
                        ))}
                    </div>
                </Modal>
            )}

        </div>
    )
}
export default SectionWrapper(Esperienza, "esperienza");