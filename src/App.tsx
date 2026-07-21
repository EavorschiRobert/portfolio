import './App.css'
import Navbar from "./components/navbar/Navbar.tsx";
import Hero from "./sections/hero/Hero.tsx";
import Skills from "./sections/skills/Skills.tsx";
import Progetti from "./sections/progetti/Progetti.tsx";
import Esperienza from "./sections/esperienza/Esperienza.tsx";
import About from "./sections/about/About.tsx";
import {LanguageProvider} from "./context/language-context.tsx";
import Contact from "./sections/contact/Contact.tsx";
import Footer from "./components/footer/Footer.tsx";
import ProgressBar from "./components/progress-bar/ProgressBar.tsx";
import Istruzione from "./sections/istruzione/Istruzione.tsx";

export const sections = [
    {
        id: "hero",
        component: Hero,
    },
    {
        id: "about",
        italianTitle: "chi sono",
        englishTitle: "about me",
        component: About,
    },
    {
        id: "education",
        italianTitle: "istruzione",
        englishTitle: "education",
        component: Istruzione,
    },
    {
        id: "skills",
        italianTitle: "competenze",
        englishTitle: "skills",
        component: Skills,
    },
    {
        id: "projects",
        italianTitle: "progetti",
        englishTitle: "work",
        component: Progetti,
    },
    {
        id: "experience",
        italianTitle: "percorso",
        englishTitle: "experience",
        component: Esperienza,
    },
    {
        id: "contact",
        italianTitle: "parliamone",
        englishTitle: "let's talk",
        component: Contact,
    },
];

function App() {
    return (
        <LanguageProvider>
            <div className="bg-background w-full h-full">
                <ProgressBar />
                <div>
                    <Navbar/>
                </div>
                {sections.map((section, index) => {
                    const Component = section.component;

                    return (
                        <Component
                            key={section.id}
                            id={section.id}
                            index={`0${index}`}
                            englishTitle={section.englishTitle!}
                            italianTitle={section.italianTitle!}/>
                    );
                })}
                <div className="bg-background w-full h-25">
                    <Footer/>
                </div>
            </div>
        </LanguageProvider>

    )
}

export default App
