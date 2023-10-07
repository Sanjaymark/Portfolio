import React from "react";

export const ContactInfo = () =>
{
    return(
        <div className="mt-20">
            <div className="text-6xl heading p-2 my-10 hover-effect1">Connect with Me</div>
            <div>
                <a href="https://github.com/Sanjaymark" target="_blank" rel="noopener noreferrer" className="btn btn-link btn-lg">GitHub</a>
                {/* <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-link btn-lg">Resume</a> */}
            </div>
            <div className="text-lg italic mailid pb-6">
                sanjaymark16@gmail.com
            </div>
            
        </div>
    )
}