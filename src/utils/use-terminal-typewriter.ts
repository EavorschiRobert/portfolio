import {useEffect, useRef, useState} from "react";

interface UseTerminalTypewriterOptions {
    speed?: number;
    lineDelay?: number;
    startDelay?: number;
    active?: boolean;
}

export function useTerminalTypewriter(lines: string[], options?: UseTerminalTypewriterOptions) {
    const {speed = 18, lineDelay = 150, startDelay = 250, active = true} = options ?? {};
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [done, setDone] = useState(false);
    const startedRef = useRef(false);

    useEffect(() => {
        if (!active || startedRef.current) return;
        startedRef.current = true;

        let timeoutId: ReturnType<typeof setTimeout>;
        let li = 0;
        let ci = 0;

        const typeChar = () => {
            const currentLine = lines[li] ?? "";
            if (ci <= currentLine.length) {
                setLineIndex(li);
                setCharIndex(ci);
                ci++;
                timeoutId = setTimeout(typeChar, speed);
            } else if (li < lines.length - 1) {
                li++;
                ci = 0;
                timeoutId = setTimeout(typeChar, lineDelay);
            } else {
                setDone(true);
            }
        };

        timeoutId = setTimeout(typeChar, startDelay);
        return () => clearTimeout(timeoutId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active]);

    return {
        done,
        isLineTyped: (index: number) => index < lineIndex || (index === lineIndex && done),
        isLineActive: (index: number) => index === lineIndex && !done,
        typedLength: (index: number) => {
            if (index < lineIndex) return lines[index]?.length ?? 0;
            if (index === lineIndex) return done ? (lines[index]?.length ?? 0) : charIndex;
            return 0;
        },
    };
}
