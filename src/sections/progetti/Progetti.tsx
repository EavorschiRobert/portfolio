import {useLanguage} from "../../context/language-context.tsx";
import {useState} from "react";
import {workButtonsFilter} from "../../constants/work-buttons-filter.ts";
import type {Filter} from "../../types/work-button-filter.type.ts";
import './Progetti.css';
import {projectView} from "../../constants/project-view.ts";
import {ProjectCard} from "../../components/project-card/ProjectCard.tsx";

const Progetti = () => {
    const {language} = useLanguage();
    const [activeFilter, setActiveFilter] = useState<'all' | 'pro' | 'personal'>('all');
    return(
        <div id="progetti" className="w-full flex justify-start flex-col">
            <div className="w-full">
                {
                    language === 'ita'
                        ? (
                            <>
                                <p className="text-accent font-code text-sm">03 - lavori</p>
                                <p className="font-heading text-3xl md:text-6xl mb-6">Progetti selezionati</p>
                            </>
                        )
                        : (
                            <>
                                <p className="text-accent font-code text-sm">03 - work</p>
                                <p className="font-heading text-3xl md:text-6xl mb-6">Selected projects</p>
                            </>
                        )
                }
            </div>
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