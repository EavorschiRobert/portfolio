import type {ProjectViewType} from "../../types/project-view.type.ts";
import './ProjectCard.css';
import {useLanguage} from "../../context/language-context.tsx";

export const ProjectCard = ({project}: {project: ProjectViewType}) => {
    const {language} = useLanguage();
    const getProjectType = (): string => {
        if (language === 'ita') {
            return project.type === 'pro' ? 'PROFESSIONALI' : 'PERSONALI';
        }
        return project.type === 'pro' ? 'PROFESSIONAL' : 'PERSONAL';
    }
    // function randomColor() {
    //     return `hsl(${Math.random() * 360} 80% 60%)`;
    // }
    // const style = {
    //     background: `linear-gradient(
    //     135deg,
    //     ${randomColor()},
    //     ${randomColor()},
    //     ${randomColor()}
    // )`
    // };
    return(
        <div id="work-card" className="bg-panel border flex flex-col h-full" >
            <span className="cover  p-4 w-full flex items-start justify-between">
                <p className="text-terminal-bg text-[.5rem]">{getProjectType()}</p>
                <p className="text-terminal-bg text-[.5rem]">{project.fromDate} {project.toDate ? `- ${project.toDate}` : 'Presente'}</p>
            </span>
            <span className="p-4 text-sm">
                <p className="font-bold text-xl font-heading">{project.title}</p>
                <p className="text-[.8rem] text-muted">{project.shortDescription}</p>
            </span>
            <span className="p-4 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                    <p
                        className="bg-accent-soft rounded px-2 border border-accent-soft text-accent font-code text-xs"
                        key={item}>{item}</p>
                ))}
            </span>
        </div>
    )
}