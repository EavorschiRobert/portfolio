import './About.css';
import Terminal from "../../components/terminal/Terminal.tsx";

const About = () => {
    return(
        <div id="about">
            <div className="mb-12">
                <p className="text-accent font-code text-sm">01 - chi sono</p>
                <p className="font-heading md:text-6xl">About me</p>
            </div>
            <div className="h-full w-full flex flex-col gap-12 justify-between lg:flex-row">
                <div className="lg:w-1/2">
                    <Terminal/>
                </div>

                <span className="lg:w-1/2">
                    <p>Progetto architetture software e guido i team che le costruiscono.</p>
                    <p>Sono un tech lead e sviluppatore full stack con 3 anni di esperienza.
                        Nell'ultimo anno mi sono concentrato sulla progettazione di soluzioni
                        software — definendo l'architettura dei sistemi e le scelte tecniche — guidando
                        poi il team nella loro realizzazione.
                    </p>
                    <br/>
                    <p>Quando non scrivo codice, contribuisco a progetti open source
                        e scrivo appunti tecnici sulle architetture distribuite.</p>
                </span>
            </div>

        </div>
    )
}
export default About;