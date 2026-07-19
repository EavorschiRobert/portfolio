import './ProgressBar.css';
import {useEffect, useState} from "react";

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const percentage = (scrollTop / docHeight) * 100;

            setProgress(percentage);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div id="progress-bar" style={{
            width: `${progress}%`
        }}></div>
    )
}
export default ProgressBar;