import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import React from 'react';






export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I came to the conclusion of the percentages shown below based on my own self reflection and understanding.<br></br>This is my opinion on how competent I am in these skills and is just to be used as a estimate.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                          
                           <div className="sk_div">


                             <div className="outerr">
                               <div className="innerr">
                                 <div id="nummm">90%</div>
                               </div>




                             </div>


                             <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                               <defs>
                                   <linearGradient id="GradientColor">
                                     <stop offset="0%" stop-color="#e91e63" />
                                     <stop offset="100%" stop-color="#673ab7" />
                                   </linearGradient>
                               </defs>
                               <circle cx="80" cy="80" r="70" stroke-linecap="round" strokeDashoffset={75}/>
                             </svg>
                             <h5 className="skill_title">Data Structures & Algorithms</h5>
                           </div>
                           <div className="sk_div">


                             <div className="outerr">
                               <div className="innerr">
                                 <div id="nummm">80%</div>
                               </div>




                             </div>


                             <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                               <defs>
                                   <linearGradient id="GradientColor">
                                     <stop offset="0%" stop-color="#e91e63" />
                                     <stop offset="100%" stop-color="#673ab7" />
                                   </linearGradient>
                               </defs>
                               <circle cx="80" cy="80" r="70" stroke-linecap="round" strokeDashoffset={100}/>
                             </svg>
                             <h5 className="skill_title">Object Oriented Programming</h5>
                           </div>
                           <div className="sk_div">


                             <div className="outerr">
                               <div className="innerr">
                                 <div id="nummm">90%</div>
                               </div>




                             </div>


                             <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                               <defs>
                                   <linearGradient id="GradientColor">
                                     <stop offset="0%" stop-color="#e91e63" />
                                     <stop offset="100%" stop-color="#673ab7" />
                                   </linearGradient>
                               </defs>
                               <circle cx="80" cy="80" r="70" stroke-linecap="round" strokeDashoffset={75}/>
                             </svg>
                             <h5 className="skill_title">API Use</h5>
                           </div>
                           <div className="sk_div">


                             <div className="outerr">
                               <div className="innerr">
                                 <div id="nummm">60%</div>
                               </div>




                             </div>


                             <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                               <defs>
                                   <linearGradient id="GradientColor">
                                     <stop offset="0%" stop-color="#e91e63" />
                                     <stop offset="100%" stop-color="#673ab7" />
                                   </linearGradient>
                               </defs>
                               <circle cx="80" cy="80" r="70" stroke-linecap="round" strokeDashoffset={200}/>
                             </svg>
                             <div className="skill_title">
                               <h5>Database Architechture</h5>
                             </div>
                              
                            
                           </div>
                           <div className="sk_div">


                             <div className="outerr">
                               <div className="innerr">
                                 <div id="nummm">40%</div>
                               </div>




                             </div>


                             <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                               <defs>
                                   <linearGradient id="GradientColor">
                                     <stop offset="0%" stop-color="#e91e63" />
                                     <stop offset="100%" stop-color="#673ab7" />
                                   </linearGradient>
                               </defs>
                               <circle cx="80" cy="80" r="70" stroke-linecap="round" strokeDashoffset={300}/>
                             </svg>
                             <h5 className="skill_title">Web Development</h5>
                           </div>
                           <div className="sk_div">


                             <div className="outerr">
                               <div className="innerr">
                                 <div id="nummm">50%</div>
                               </div>




                             </div>


                             <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                               <defs>
                                   <linearGradient id="GradientColor">
                                     <stop offset="0%" stop-color="#e91e63" />
                                     <stop offset="100%" stop-color="#673ab7" />
                                   </linearGradient>
                               </defs>
                               <circle cx="80" cy="80" r="70" stroke-linecap="round" strokeDashoffset={250}/>
                             </svg>
                             <h5 className="skill_title">AI Development</h5>
                           </div>
                          
                       </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
