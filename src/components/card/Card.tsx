import { motion } from "motion/react";
import './Card.css';
import * as React from "react";

const Card = ({children, className, animation, ...props}: {children: React.ReactNode, className?: string, animation?: boolean}) => {
    return (
        <>
            {animation
                ? (
                    <motion.div
                        whileHover={{
                            scale: 1.05
                        }}
                        animate={{
                            transition: {
                                type: "spring",
                                stiffness: 500,
                            }
                        }}
                        className={`card bg-panel w-full p-6 rounded-2xl border border-line shadow-xl ${className}`}
                        {...props}
                    >
                        {children}
                    </motion.div>
                ) : (
                    <div
                        className={`bg-panel w-full p-6 rounded-2xl border border-line shadow-xl ${className}`}
                        {...props}
                    >
                        {children}
                    </div>
                )}
        </>
    )
}
export default Card;