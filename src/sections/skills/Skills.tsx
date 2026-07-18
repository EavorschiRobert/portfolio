import {skills} from "../../constants/skills.ts";
import type {SkillsType} from "../../types/skills.type.ts";
import './Skills.css';

const Skills = () => {
    return(
        <div id="skills">
            <div className="w-full">
                <p className="text-accent font-code text-sm">02 - competenze</p>
                <p className="font-heading text-3xl md:text-6xl mb-6">Tech stack</p>
            </div>
            <div className="skill-grid">
                {skills.map((item: SkillsType) => (
                    <div id="skill-card" className="
                    bg-panel p-8 rounded-2xl border border-line
                    shadow-lg
                    " key={item.title}>
                        <p className="text-accent font-bold mb-4">{item.title}</p>
                        <span>
                            {item.skills.map((skill, index: number) => (
                                <p className="text-muted" key={index}>{skill}</p>
                            ))}
                        </span>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default Skills;