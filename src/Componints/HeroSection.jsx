import React from "react";
const HeroSection = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative md:mb-0 mb-32 w-100%">
            <img src='/src/assets/images/Frame 22.svg' className="h-auto md:h-screen md:w-full w-full object-cover object-center" />
<nav className="absolute top-0 left-0 right-0 p-6">
                <nav className="flex justify-between md:p-4 text-white md:font-medium font-light">
                    <h1 className="font-light md:text-xl text-center md:ml-28">UX/UI <br />
                        & Front End <br />Developer</h1>
                    <ul className="flex gap-6">
                            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Me</a></li>
                            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
                            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
                            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
                    
                    </ul>
                </nav>
           </nav>
            <div className="absolute md:top-28 md:w-auto w-20 md:left-40 left-5 top-24 right-0 p-6 align-item">
                 <img src="/src/assets/images/Arrow 1.svg"/>
            </div>
       
            <div className="absolute md:top-52 md:left-52 left-8 top-40 right-0 p-6 align-item">
             
                <img src='/src/assets/images/PORTFOLIO.svg' className="md:w-auto w-60" />
                <p className="md:ml-20 ml-14 p-2 text-white font-agbalumo md:text-3xl">Maryam Badhib</p>
                <p className="md:ml-44 ml-24 md:p-2 text-white font-bold md:text-xl ">2025</p>
            </div>
        </div>
    );
}

export default HeroSection;
