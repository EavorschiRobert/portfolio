import './App.css'
import Navbar from "./components/navbar/Navbar.tsx";
import Hero from "./sections/hero/Hero.tsx";
import Skills from "./sections/skills/Skills.tsx";
import Progetti from "./sections/progetti/Progetti.tsx";
import Esperienza from "./sections/esperienza/Esperienza.tsx";
import SectionLayout from "./components/layout/SectionLayout.tsx";
import About from "./sections/about/About.tsx";

function App() {
  return (
    <div className="bg-background w-full h-full">
      <div className="px-12 py-4">
        <Navbar />
      </div>
      <SectionLayout className="bg-background w-full h-full">
        <Hero />
      </SectionLayout>
      <SectionLayout className="bg-background w-full h-full">
          <About />
      </SectionLayout>
      <div className="bg-background w-full h-full">
        <Skills />
      </div>
      <div className="bg-background w-full h-full">
        <Progetti />
      </div>
      <div className="bg-background w-full h-full">
        <Esperienza />
      </div>
    </div>
  )
}

export default App
