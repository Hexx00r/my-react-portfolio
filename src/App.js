import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/NavBar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import { motion } from "framer-motion";
import LineGradient from "./components/LineGradient";
import Contact from "./scenes/Contact";
import Myskills from "./scenes/Myskills";
import Projects from "./scenes/Projects"
import Testimonials from "./scenes/Testimonials";
import Footer from "./scenes/Footer";
 

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [selectedPage, setSelectedPage] = useState("home")
  const isDesktop = useMediaQuery("(min-width: 1060px)")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.srollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

   return( 
   <div className="app bg-deep-blue">
      {/*NAVIGATION BAR */}
     <Navbar 
     isTopOfPage={isTopOfPage}
     selectedPage={ selectedPage } 
     setSelectedPage={setSelectedPage}/>
    <div className="w-5/6 mx-auto md:h-full">
      {isDesktop && (
        <DotGroup
         selectedPage={selectedPage}
         setSelectedPage={setSelectedPage}
         />
      )}
      <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("home")}
        >   
      <Landing setSelectedPage={setSelectedPage} />
      </motion.div>   
    </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
        margin="0 0 -200px 0"
        amount="all"
        onViewportEnter={() => setSelectedPage("skills")}>
         <Myskills />
        </motion.div>
      </div>
        <LineGradient />
        <div className="w-5/6 mx-auto">
          <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
          >
          <Projects />
          </motion.div>
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
          <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("testimonials")}
          >
          <Testimonials/>
          </motion.div>
        </div>
        
        <div className="w-5/6 mx-auto md:h-full">
          <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contacts")}
          >
          <Contact />
          </motion.div>
        </div>
      <Footer/> 
     </div>
  )
}

export default App;
