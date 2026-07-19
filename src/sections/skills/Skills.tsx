import './Skills.css';
import SectionTitle from "../../components/section-title/SectionTitle.tsx";
import type {SectionProps} from "../../types/section-props.ts";
import {useLanguage} from "../../context/language-context.tsx";
import SectionWrapper from "../../components/layout/SectionLayout.tsx";
import {technologies} from "../../constants";
import BallCanvas from "../../components/canvas/Ball.tsx";
import Card from "../../components/card/Card.tsx";

const Skills = ({index, italianTitle, englishTitle}: SectionProps) => {
    const {language} = useLanguage();
    return(
        <div className="w-full">
            <SectionTitle title={language === 'ita' ? `${index} - ${italianTitle}` : `${index} - ${englishTitle}`}  subtitle={'Tech stack'}/>
            <Card>
                <div className="flex flex-row flex-wrap justify-center gap-10">
                    {technologies.map((technologie) => (
                        <div className="w-28 h-28" key={technologie.name}>
                            <BallCanvas icon={technologie.icon}/>
                        </div>
                    ))}

                </div>
            </Card>
        </div>
    )
}
export default SectionWrapper(Skills, "skills");