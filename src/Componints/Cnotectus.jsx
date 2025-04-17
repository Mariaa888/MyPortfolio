import React from "react";

const Contactus = () => {
    return (
        <div   id="contact" className=" bg-white rounded-t-[50px] h-60">
            <h1 className="text-[#E91E63] font-agbalumo text-center text-3xl md:text-[50px] pt-8">
                Contact
            </h1>
            <p className="text-center mt-6 text-xl font-semibold">Feel free to reach out for collaborations,<br></br> opportunities! 🚀</p>
        <div className="flex flex-row mt-5 justify-center gap-6 mb-8">
                <img src="/MyPortfolio/images/skill-icons_gmail-light.svg" className="md:h-10 h-8"></img>
                <img src="/MyPortfolio/images/Group 9.svg" className="md:h-10 h-8"></img>
                <img src="/MyPortfolio/images/devicon_behance.svg" className="md:h-10 h-8"></img>
                <img src="/MyPortfolio/images/ri_github-fill.svg" className="md:h-10 h-8"></img>        </div>
        </div>
    );}
export default Contactus;