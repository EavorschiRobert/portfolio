import Terminal from "../../components/terminal/Terminal.tsx";
import {counterAttivita} from "../../constants/counter-attivita.ts";

const About = () => {
    return(
        <div id="about">
            <div className="w-full">
                <p className="text-accent font-code text-sm">01 - chi sono</p>
                <p className="font-heading text-3xl md:text-6xl mb-6">About me</p>
            </div>
            <div className="w-full flex flex-col justify-between items-start gap-4 lg:gap-12 lg:flex-row">
                <div className="w-full lg:w-1/2">
                    <Terminal/>
                </div>

                <div className="lg:w-1/2 text-muted flex flex-col justify-between gap-8 ">
                    <span>
                        <p className="font-heading text-2xl">
                            Progetto
                            <em className="text-accent"> architetture software </em>
                            e guido i team che le costruiscono.
                        </p>

                        <p>Sono un tech lead e sviluppatore full stack con 3 anni di esperienza.
                            Nell'ultimo anno mi sono concentrato sulla progettazione di soluzioni
                            software — definendo l'architettura dei sistemi e le scelte tecniche — guidando
                            poi il team nella loro realizzazione.
                        </p>
                    </span>

                    <div className="flex
                          justify-between
                          gap-8"
                    >
                        {counterAttivita.map((item, index) => (
                            <span className="border-t border-line" key={index}>
                                    <p className="text-accent text-2xl md:text-4xl font-heading font-bold mt-4">{item.title}</p>
                                    <p className="break-all text-sm md:text-xl">{item.content}</p>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
export default About;