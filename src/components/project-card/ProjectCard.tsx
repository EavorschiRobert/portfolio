import type {ProjectViewType} from "../../types/project-view.type.ts";
import './ProjectCard.css';
import {useLanguage} from "../../context/language-context.tsx";
import {motion} from 'motion/react';

export const ProjectCard = ({project}: {project: ProjectViewType}) => {
    const {language} = useLanguage();
    const getProjectType = (): string => {
        if (language === 'ita') {
            return project.type === 'pro' ? 'PROFESSIONALI' : 'PERSONALI';
        }
        return project.type === 'pro' ? 'PROFESSIONAL' : 'PERSONAL';
    }

    return(
        <motion.div
            whileHover={{
                scale: 1.09
            }}
            animate={{
                transition: {
                    type: "spring",
                    stiffness: 500,
                }
            }}
            id="work-card" className="bg-panel border flex flex-col h-full" >
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
        </motion.div>
    )
}