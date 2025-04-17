import { useState } from "react";

const projectsData = {
    "Web Design": [
        {
            name: "Crave & Conqure",
            description: "a Website Desinged by Using HTML, CSS and JavaSript", 
            img: "/MyPortfolio/images/Macbook-Pro-Showcase-Scene-Free-psd-Mockup copy.jpg",
            github: "https://github.com/Mariaa888/Crave-Conqure#",
            view: "/MyPortfolio/images/Frame 125.png"
        },
        {
            name: "Web Project 2",
            description: "An App Desinged by Using React Native and CSS Tailwind - in progress",
            img: "/MyPortfolio/images/Frame 12.png",
            github: "#",
            view: "#"
        },
        {
            name: "My Portfolio(This Website)",
            description: "a Website Desinged by Using react and CSS Tailwind",
            img: "/MyPortfolio/images/Frame 24.png",
            github: "https://github.com/Mariaa888/MyPortfolio/tree/main",
            view: "/MyPortfolio/images/Frame 25.png"
        },
    ],
    "UX Design": [
        {
            name: "Crave & Conqure",
            description: "Skate Board Store Website",
            img: "/MyPortfolio/images/Macbook-Pro-Showcase-Scene-Free-psd-Mockup copy.jpg",
            behance: "https://www.behance.net/gallery/218859967/Carve-Conwquer-Skate-Board-Website",
            view: ["/MyPortfolio/images/lightmode 1.png", "/MyPortfolio/images/lightmode 18.png", "/MyPortfolio/images/light mode 9.png", "/MyPortfolio/images/light mode.png"]
        },
        {
            name: "ExecVoyager",
            description: "Hotel Mobile App",
            img: "/MyPortfolio/images/Frame 12.png",
            behance: "https://www.behance.net/gallery/207117799/ExecVoyager-Hotel-Mobile-App-UXUI#",
            view: ["/MyPortfolio/images/Frame 38.png", "/MyPortfolio/images/Frame 50.png"]

        },
        {
            name: "YourLawyer",
            description: "Lawyer Firm Website Landing Page",
            img: "/MyPortfolio/images/Frame 57.png",
            behance: "https://www.behance.net/gallery/209460843/YourLawyer-Lawyer-Firm-Website-Landing-Page",
            view: "/MyPortfolio/images/Frame 30.png"
        },
    ],
    "Real World Project": [
        {
            name: "Brainiac Training Centre",
            description: "using React Native and Tailwind CSS.",
            img: "/MyPortfolio/images/Macbook Pro Frame.png",
            view: ["/MyPortfolio/images/SignIn.svg", "/MyPortfolio/images/img2.jpeg"]
        },
        {
            name: "Dashboard",
            description: "UI Dashboard for School System",
            img: "/MyPortfolio/images/Frame 21.png",
            view: "/MyPortfolio/images/Dashboar.jpeg"
        },
    ],
};
export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("Web Design");
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleViewClick = (index) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <div id="projects" className="bg-pink-400 min-h-screen w-full p-8 flex flex-col items-center overflow-x-hidden">
            <h1 className="text-white font-agbalumo text-center text-4xl font-bold italic mb-6">My Projects</h1>

            <div className="flex flex-row max-w-screen-lg mx-auto w-full md:justify-between">
                <div className="flex flex-col gap-4 md:w-1/4 align-items-end">
                    {Object.keys(projectsData).map((category) => (
                        <button
                            key={category}
                            className={`flex flex-row md:text-lg md:ml-0 w-auto ml-[-6px] text-sm font-bold transition-all ${activeCategory === category ? "text-white" : "text-black"} whitespace-nowrap`}
                            onClick={() => {
                                setActiveCategory(category);
                                setExpandedIndex(null);
                            }}
                        >
                            {activeCategory === category && (
                                <img src="/MyPortfolio/images/bxs_up-arrow.svg" className="md:mt-1 ml-[-25px] h-6" />
                            )}
                            {category}
                        </button>
                    ))}
                </div>

                <div className="flex flex-col gap-6 align-items-end">
                    {projectsData[activeCategory].map((project, index) => (
                        <div
                            key={index}
                            className="bg-white md:w-[400px] w-[250px] md:p-5 ml-4 p-2 rounded-lg shadow-md flex flex-col gap-2"
                        >
                            <div className="flex flex-row items-center gap-4">
                                <div className="md:w-28 w-24 h-20 md:h-28 bg-gray-300 rounded-lg">
                                    <img
                                        src={project.img}
                                        className="w-full  h-full md:object-cover rounded-lg"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold md:text-lg">{project.name}</h3>
                                    <p className="text-sm">{project.description}</p>
                                    <div className="flex gap-2 mt-2">
                                        {activeCategory === "UX Design" && (
                                            <a href={project.behance} className="bg-blue-500 text-white px-3 py-1 rounded">Behance</a>
                                        )}
                                        {activeCategory === "Web Design" && (
                                            <a href={project.github} className="bg-gray-900 text-white px-3 py-1 rounded">GitHub</a>
                                        )}
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleViewClick(index);
                                            }}
                                            className="bg-green-500 text-white px-3 py-1 rounded"
                                        >
                                            {expandedIndex === index ? "Hide" : "View"}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {expandedIndex === index && (
                                <div className="mt-4 w-full gap-4">
                                    {Array.isArray(project.view) ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center align-items-center">
                                            {project.view.map((imgSrc, i) => (
                                                <img
                                                    key={i}
                                                    src={imgSrc}
                                                    alt={`Expanded Preview ${i + 1}`}
                                                    className="w-full rounded-lg border-4 border-gray-200 shadow-lg"
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="flex justify-center">
                                            <img
                                                src={project.view}
                                                alt={`Expanded Preview Screenshot`}
                                                className="w-full max-w-2xl rounded-lg border-4 border-gray-200 shadow-lg"
                                            />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}