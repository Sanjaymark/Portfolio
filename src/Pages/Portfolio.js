import React from "react";
import { Introduction } from "../Components/Introduction";
import { About } from "../Components/About";
import { ContactInfo } from "../Components/Contact Info";
import { Skills } from "../Components/Skills";
import { Projects } from "../Components/Projects";
import { Experience } from "../Components/Experience";
import { Certifications } from "../Components/Certifications";


export const Portfolio = () =>
{
    return(
        <div className="bg light h-full">
            <Introduction/>
            <About/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Certifications/>
            <ContactInfo/>
        </div>
    )
}