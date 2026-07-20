import './SectionLayout.css';
import * as React from "react";
import {motion} from 'motion/react';
import {getVariant} from "../../utils/animation-variants.ts";

type SectionWrapperProps = {
    id: string;
    italianTitle: string;
    englishTitle: string;
    animation?: {
        directionX?: 'left' | 'right',
        directionY?: 'up' | 'down',
        type?: 'spring',
        ease?: 'linear' | 'easeInOut' | 'easeOut' | 'easeIn',
    }
}


function SectionWrapper<T extends SectionWrapperProps>(
    Component: React.ComponentType<T>, id: string,
    animation?: {
        directionX?: 'left' | 'right',
        directionY?: 'up' | 'down',
        type?: 'spring',
        ease?: 'linear' | 'easeInOut' | 'easeOut' | 'easeIn',
    }
) {
    return (props: T) => {
        return (
            <span
                className={`
                    flex
                    w-full
                    min-h-screen
                    justify-center
                    items-start
                    py-24
                    px-6
                    md:px-12
                    lg:px-24
                    lg:items-center
                    border-b
                    bg-background
                    border-line
                `}
                id={id}>
                <motion.div
                    className="w-full"
                    variants={getVariant(animation?.directionX, animation?.directionY ?? 'up', animation?.type, animation?.ease ?? 'easeIn')}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Component {...props} />
                </motion.div>

            </span>
        )
    }
}
export default SectionWrapper;