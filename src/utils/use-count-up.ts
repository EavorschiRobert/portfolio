import {useEffect, useRef, useState} from "react";

interface UseCountUpOptions {
    duration?: number;
    active?: boolean;
}

export function useCountUp(target: number, options?: UseCountUpOptions) {
    const {duration = 1800, active = true} = options ?? {};
    const [value, setValue] = useState(0);
    const startedRef = useRef(false);

    useEffect(() => {
        if (!active || startedRef.current) return;
        startedRef.current = true;

        let rafId: number;
        const start = performance.now();

        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(target * eased));
            if (progress < 1) rafId = requestAnimationFrame(tick);
        };

        rafId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId);
    }, [active, target, duration]);

    return value;
}
