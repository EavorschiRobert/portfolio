import type {ProjectViewType} from "../../types/project-view.type.ts";
import './ProjectCard.css';

export const ProjectCard = ({project}: {project: ProjectViewType}) => {
    return(
        <div className="bg-panel rounded-b-2xl border border-line flex flex-col h-full">
            <span className="cover">
                ◈
            </span>
            <span className="p-4 text-sm">
                <p className="font-bold">{project.title}</p>
                <p>{project.shortDescription}</p>
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