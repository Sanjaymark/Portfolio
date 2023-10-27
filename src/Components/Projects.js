import React from "react";

export const Projects = () =>
{
    return(
        <div className="mt-20 h-full w-full light hover-p">
          <div className="text-6xl heading p-2 my-16 hover-effect1">Projects</div>
          <div className="flex flex-col w-full lg:flex-row ">
            <div className="grid flex-grow h-full rounded-box place-items-center">
              <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-full rounded-box place-items-center">
                  <span className="text-4xl italic mb-12 projects ">Inventory Billing</span>
                  <div className="card card-compact w-80 shadow-xl project-img">
                    <img src="https://androidcure.com/wp-content/uploads/2020/06/choose-right-Inventory-Management-Software.jpg" alt="Billing" />
                    <div className="card-body ">
                      <br></br>
                      <div className="card-actions justify-end">
                        <a href="https://github.com/Sanjaymark/Billing-App-FrontEnd" target="_blank">
                          <button className="btn btn-info bg-neutral light btn-outline">View Code</button>
                        </a>
                        <a href="https://652f7947f4e7dd65eb2d3bcf--candid-cajeta-3f27a2.netlify.app/" target="_blank">
                          <button className="btn btn-secondary bg-neutral light">Live App</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div> 
              
                <div className="grid flex-grow h-full rounded-box place-items-center">
                  <span className="text-4xl italic mb-12 projects">Movie Ticket Booking</span>
                  <div className="card card-compact w-96  shadow-xl project-img">
                    <img src="https://hirharang.com/wp-content/uploads/2018/07/Movie-Ticket-Booking-Online.jpg" alt="Ticket Booking" />
                    <div className="card-body">
                      <br></br>
                      <div className="card-actions justify-end">
                        <a href="https://github.com/Sanjaymark/MovieBooking-FrontEnd" target="_blank">
                          <button className="btn btn-info bg-neutral light btn-outline">View Code</button>
                        </a>
                        <a href="https://gorgeous-selkie-782bcd.netlify.app/" target="_blank">
                          <button className="btn btn-secondary bg-neutral light">Live App</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
           
            <div className="grid flex-grow h-full rounded-box place-items-center">
              <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow h-full rounded-box place-items-center">
                  <span className="text-4xl italic mb-12 projects">Student Details</span>
                  <div className="card card-compact w-96 shadow-xl project-img">
                    <img src="https://tracen.com/wp-content/uploads/2021/03/AdobeStock_389609383-edited-1536x863.jpeg" alt="Student Details" />
                    <div className="card-body">
                      <br></br>
                      <div className="card-actions justify-end">
                        <a href="https://github.com/Sanjaymark/FormProject-FrontEnd" target="_blank">
                          <button className="btn btn-info bg-neutral light btn-outline">View Code</button>
                        </a>
                        <a href="https://tourmaline-taiyaki-593730.netlify.app/" target="_blank">
                          <button className="btn btn-secondary bg-neutral light">Live App</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div> 
             
                <div className="grid flex-grow h-full rounded-box place-items-center">
                  <span className="text-4xl italic mb-12 projects">Blogs Web App</span>
                  <div className="card card-compact w-80 shadow-xl project-img">
                    <img src="https://thumbs.dreamstime.com/b/blog-digital-background-internet-concept-34568237.jpg" alt="Blogs" />
                    <div className="card-body">
                      <br></br>
                      <div className="card-actions justify-end">
                        <a href="https://github.com/Sanjaymark/Blog-FrontEnd" target="_blank">
                          <button className="btn btn-info bg-neutral light btn-outline">View Code</button>
                        </a>
                        <a href="https://statuesque-druid-7ef8bb.netlify.app/" target="_blank">
                          <button className="btn btn-secondary bg-neutral light">Live App</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div>
              <div className="text-4xl italic m-4 mt-8 projects">
                Tech Stacks Used in Projects
              </div>
              <div className="tech1">
                <div className="flex tech2">
                  <div className="text-3xl m-3 ml-14">HTML</div>
                  <div className="text-3xl m-3">CSS</div>
                  <div className="text-3xl m-3">JavaScript</div>
                  <div className="text-3xl m-3">React.js</div>
                  <div className="text-3xl m-3">Node.js</div>
                  <div className="text-3xl m-3">Express.js</div>
                  <div className="text-3xl m-3">MongoDB</div>
                  <div className="text-3xl m-3">Daisy UI</div>
                  <div className="text-3xl m-3">Github</div>
                  <div className="text-3xl m-3">Netlify</div>
                  <div className="text-3xl m-3">Render</div>
                </div>  
              </div>
            </div>
        </div>
    )
}