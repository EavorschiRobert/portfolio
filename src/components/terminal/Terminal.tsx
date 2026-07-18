import {aboutJson} from "../../constants/about-json.ts";
import type {AboutJson} from "../../types/about-json.type.ts";

const Terminal = () => {
    return(
        <div className="w-full">
            <div className="p-4 bg-terminal-bg rounded-4xl flex flex-col h-full w-full">
                <div className="mb-8 flex gap-3 p-2 border-b border-muted">
                    <span className="">
                        <div className="bg-close-terminal rounded-full w-3 h-3"></div>
                    </span>
                    <span>
                        <div className="bg-minimize-terminal rounded-full w-3 h-3"></div>
                    </span>
                    <span>
                        <div className="bg-confirm-terminal rounded-full w-3 h-3"></div>
                    </span>
                </div>

                <pre className="px-4 font-code">
                    <p className="text-muted">// profile.ts</p>
                    <span className="flex gap-2">
                        <p className="text-accent">const</p>
                        <p className="text-panel">dev = {'{'}</p>
                    </span>
                    {aboutJson.map((item: AboutJson, i: number) => (
                        <span className="flex flex-wrap gap-2" key={i}>
                        <p className="text-panel pl-4">{item.title}:</p>
                            {item.type === 'list' && (
                                <p className="text-panel">[</p>
                            )}
                        <p className="text-string">{"'"+item.content+"'"}</p>
                            {item.type === 'list' && (
                                <p className="text-panel">]</p>
                            )}
                            {i < (aboutJson.length - 1) && (
                                <p className="text-panel">,</p>
                            )}
                    </span>
                    ))}
                    <p className="text-panel">{'};'}</p>
                </pre>
            </div>
        </div>
    )
}
export default Terminal;