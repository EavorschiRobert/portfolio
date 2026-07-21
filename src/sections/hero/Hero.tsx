import './Hero.css';
import {technologies} from "../../constants/technologies.ts";
import Technology from "../../components/technology/Technology.tsx";
import {useLanguage} from "../../context/language-context.tsx";
import type {SectionProps} from "../../types/section-props.ts";
import SectionWrapper from "../../components/layout/SectionLayout.tsx";
import {motion} from 'motion/react';
import {stagger, type Variants} from "motion";

const listVariant: Variants = {
    hidden: {
    },
    visible: {
        transition: {
            delay: 5,
            delayChildren: stagger(0.3),
        }
    },
}
const itemVariant: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
            type: 'spring',
            stiffness: 150,
        }
    },
};
const Hero = (_: SectionProps) => {
    const { language } = useLanguage();
    return(
        <motion.div

            className="w-full h-full flex justify-center items-start flex-col"
        >
            <p className="text-accent font-code terminal-cursor md:text-sm text-xs">$ whoami</p>
            <h1 className="font-heading leading-none md:text-8xl text-4xl">
                Eavorschi Robert Daniel
            </h1>
            <p className="leading-none font-heading text-accent italic md:text-6xl text-4xl">
                Tech Lead & Full Stack Developer.
            </p>
            {
                language === 'ita'
                ? (
                        <p>
                            Progetto soluzioni software e guido il team che le realizza.<br/>
                            3 anni di esperienza come sviluppatore full stack, con un focus recente su<br/>
                            architettura e team leadership.
                        </p>
                    )
                    : (
                        <p>
                            I design software solutions and lead the team that builds them.<br/>
                            3 years of experience as a full stack developer, with a recent focus on<br/>
                            architecture and team leadership.
                        </p>
                    )
            }

            <motion.div
                variants={listVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-4 mt-8">
                {technologies.map((technology) => (
                    <motion.span
                        variants={itemVariant}
                        key={technology}>
                      <Technology title={technology}/>
                    </motion.span>

                ))}
            </motion.div>
        </motion.div>
    )
}
export default SectionWrapper(
    Hero,
    'hero',
);