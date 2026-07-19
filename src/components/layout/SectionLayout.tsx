import './SectionLayout.css';
import * as React from "react";

type SectionWrapperProps = {
    id: string;
    italianTitle: string;
    englishTitle: string;
}

function SectionWrapper<T extends SectionWrapperProps>(Component: React.ComponentType<T>, id: string) {
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
                <Component {...props} />
            </span>
        )
    }
}
export default SectionWrapper;