import {useLanguage} from "../../context/language-context.tsx";
import {useState} from "react";
import {workButtonsFilter} from "../../constants/work-buttons-filter.ts";
import type {Filter} from "../../types/work-button-filter.type.ts";
import './Progetti.css';
import {projectView} from "../../constants/project-view.ts";
import {ProjectCard} from "../../components/project-card/ProjectCard.tsx";
import SectionTitle from "../../components/section-title/SectionTitle.tsx";
import type {SectionProps} from "../../types/section-props.ts";

const Progetti = ({index, italianTitle, englishTitle}: SectionProps) => {
    const {language} = useLanguage();
    const [activeFilter, setActiveFilter] = useState<'all' | 'pro' | 'personal'>('all');
    return(
        <div id="progetti" className="w-full flex justify-start flex-col">

            <SectionTitle title={language === 'ita' ? `${index} - ${italianTitle}` : `${index} - ${englishTitle}`}  subtitle={'Selected projects'}/>
            <div className="flex gap-8">
                {
                    workButtonsFilter.find(item => item.location === language)?.data.map((item: Filter) => (
                        <button key={item.filter} className={
                            `text-sm font-code 
                            bg-panel 
                             p-2 px-4 rounded-2xl
                             cursor-pointer ${item.filter === activeFilter ? 'active' : 'border border-line'}
                              `
                        }
                                onClick={() => setActiveFilter(item.filter)}
                        >{item.title}</button>
                    ))
                }
            </div>
            <div className="project-grid mt-4">
                {projectView
                    .find(item => item.location === language)?.data
                    .filter(item => item.type === activeFilter || activeFilter === 'all').map((item) => (
                    <ProjectCard project={item}/>
                ))}
            </div>
        </div>
    )
}
export default Progetti;