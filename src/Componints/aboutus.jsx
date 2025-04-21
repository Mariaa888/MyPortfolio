import React from "react";

const AboutMe = () => {
    return (
        <div id = "about"  className="bg-white rounded-tl-[60px] px-6 md:px-12">
            <h1 className="text-[#E91E63] font-agbalumo text-center text-3xl md:text-[50px] pt-8">
                About Me
            </h1>

            <div className="flex md:flex-row flex-col mt-8 md:gap-12 gap-2 md:items-center justify-center  ">
                <div className="flex flex-col w-[389px]">
                    <text className="font-agbalumo text-[#E91E63] md:text-xl text-4xl">
                        Hello,
                    </text>
                    <text className="md:font-bold mt-3 text-sm md:text-base w-auto ">
                        I'm Maryam! A UX & Front-end Developer passionate about creating seamless, engaging, and visually appealing digital experiences. With a solid background in UX/UI design, I combine creativity and problem-solving to craft user-centric interfaces and interactive web applications. Always evolving, I stay ahead of industry trends to deliver intuitive, responsive, and innovative solutions</text>
                </div>
                <div className="flex flex-col md:w-[300px]">
                    <text className="font-agbalumo text-[#E91E63] md:text-xl text-2xl mt-3">
                        Experience
                    </text>
                    <ul className="list-disc md:font-bold mt-3 text-sm md:text-base flex md:flex-col flex-row flex-wrap">
                        <li className="w-[190px] md:w-auto">UX & Frontend Developer | Brainiac Training Centre Pvt Ltd (Oct 2024 – Present)</li>
                        <li className="w-[190px] md:w-auto">Freelance UX/UI Designer & Frontend Developer</li>
                    </ul>


                </div>
            </div>

            <div id="skills" className="flex flex-col md:flex-row mt-8 md:gap-12 gap-10 md:items-center justify-center">
                <div className="flex flex-col w-[389px]">
                    <text className="font-agbalumo text-[#E91E63] text-xl md:text-2xl">
                        Technical Skills
                    </text>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-4">
                        <div className="flex flex-col items-center">
                            <img src="/MyPortfolio/images/skill-icons_html.svg" className="md:h-12 h-9" />
                            <span className="text-sm mt-2">HTML</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/MyPortfolio/images/skill-icons_css.svg" className="md:h-12 h-9" />
                            <span className="text-sm mt-2">CSS</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/MyPortfolio/images/devicon_tailwindcss.svg" className="md:h-12 h-9" />
                            <span className="text-sm mt-2">CSS Tailwind</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/MyPortfolio/images/vscode-icons_file-type-js-official.svg" className="md:h-12 h-9" />
                            <span className="text-sm mt-2">JavaScript</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/MyPortfolio/images/devicon_react.svg" className="md:h-12 h-9" />
                            <span className="text-sm mt-2">React</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/MyPortfolio/images/devicon_reactnative-wordmark.svg" className="md:h-12 h-9" />
                            <span className="text-sm mt-2">React Native</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/MyPortfolio/images/devicon_figma.svg" className="md:h-12 h-9" />
                            <span className="text-sm mt-2">Figma</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/MyPortfolio/images/devicon_php.svg" className="md:h-12 h-9" />
                            <span className="text-sm mt-2">PHP</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/MyPortfolio/images/logos_adobe-xd.svg" className="md:h-12 h-9" />
                            <span className="text-sm mt-2">Adobe XD</span>
                        </div>
                    </div>

</div>
                <div className="flex flex-col w-[300px] md:mb-40">
                    <text className="font-agbalumo text-[#E91E63] text-xl md:text-2xl ">
                        Soft Skills
                    </text>
                    <ul className="list-disc md:font-bold mt-3 md:ml-5 w-auto text-base mb-5 grid grid-cols-2 md:grid-cols-1">
                        <li className=" w-64">Effective Communication</li>
                        <li className="ml-14 w-64">Time Management</li>
                        <li className="mt-4">Problem-Solving</li>
                        <li className="ml-14 mt-4">Adaptability</li>
                    </ul>


                </div>
            </div>
        </div>
    );
};

export default AboutMe;
