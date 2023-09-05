import React from "react";

export const About = () =>
{
    return(
        <div className="flex w-full mt-20">
            <div className="grid h-80 m-1 w-3/5">
                <div>
                    <div className="m-2 ">
                        <span className="text-6xl heading p-2">About Me</span>
                    </div>
                    <div className="text-lg italic ">
                        <p>I'm a passionate and dedicated full stack developer, with  strong foundation in both front-end and back-end
                             technologies, I bring creative solutions to life through code. My approach to development revolves around <br></br>
                             creating user-friendly and efficient applications. I believe that great code is not just functional, 
                             but also elegant <br></br> and maintainable. I enjoy tackling challenges head-on and collaborating with fellow developers 
                             to bring <br></br> innovative ideas to the table.
                        </p>
                    </div>
                </div>

            </div>
            
            <div className="grid h-80  w-2/5 m-1 ">
                <span className="text-5xl heading p-2">MERN STACK </span>
                <div className="flex">
                   <div className="p-2 h-48"> <img src="https://th.bing.com/th/id/OIP.pfKpi_V5ZR3nrsXgLh0uwAHaEK?w=313&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" width="130" height="100" alt="MongoDB Logo"></img></div>
                   <div className="p-2 h-40"><img src="https://www.hugeserver.com/kb/wp-content/uploads/2017/12/expresslogo.png" width="150" height="100" alt="Express.js Logo"></img></div>
                   <div className="p-2 h-40"><img src="https://th.bing.com/th/id/OIP.YePVzjkjsadOqzQ03wl5kAHaEO?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" width="110" height="100" alt="React.js Logo"></img></div>
                   <div className="p-2 h-40"><img src="https://www.eds.fr/wp-content/uploads/2016/11/La-version-7-de-Node.js-est-desormais-disponible.jpg" width="130" height="100" alt="Node.js Logo"></img></div>
                </div>
            </div>
        </div>
    )
}