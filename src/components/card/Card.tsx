import * as React from "react";

const Card = ({children, className, ...props}: {children: React.ReactNode, className?: string}) => {
    return (
        <div
            className={`bg-panel w-full p-6 rounded-2xl border border-line shadow-xl ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}
export default Card;