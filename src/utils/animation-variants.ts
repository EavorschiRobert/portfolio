import type {Variants} from "motion";

export function getVariant(
    directionX?: 'left' | 'right',
    directionY?: 'up' | 'down',
    type?: 'spring',
    ease?: 'linear' | 'easeInOut' | 'easeOut' | 'easeIn',
): Variants {

    return {
        hidden: {
            opacity: 0,
            x: directionX === 'left' ? 100
                : directionX === 'right' ? -100
            : 0,
            y:  directionY === 'up' ? 100
                : directionY === 'down' ? -100
                    : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: .5,
                delay: 0.2,
                type: type,
                ease: ease,
            }
        },
    };
}