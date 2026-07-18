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
      <SectionLayout className="bg-background w-full">
        <Hero />
      </SectionLayout>
      <SectionLayout className="bg-background w-full">
          <About />
      </SectionLayout>
      <SectionLayout className="bg-background w-full">
        <Skills />
      </SectionLayout>
      <SectionLayout className="bg-background w-full">
        <Progetti />
      </SectionLayout>
      <SectionLayout className="bg-background w-full">
        <Esperienza />
      </SectionLayout>
    </div>
  )
}

export default App
