import type {ReactNode} from "react";

const Terminal = ({children}: { children: ReactNode }) => {
    return(
        <div className="flex w-full justify-center">
            <div className="w-full overflow-hidden p-4 bg-terminal-bg rounded-4xl flex flex-col">
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
                {children}
            </div>
        </div>
    )
}
export default Terminal;