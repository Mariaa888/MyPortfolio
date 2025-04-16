import React from "react";
import HeroSection  from "../Componints/HeroSection";
import AboutMe from "../Componints/aboutus";
import Projects from "../Componints/myProjects";
import Contactus from "../Componints/Cnotectus";
const HomePage =()=>{
    return(
        <div className="bg-[#F379A3]  overflow-x-hidden">  
        <HeroSection />
            <AboutMe id="about" />
            <Projects id="projects" />
            <Contactus id="contact" />
            
        </div>

        
    );
}
export default HomePage;