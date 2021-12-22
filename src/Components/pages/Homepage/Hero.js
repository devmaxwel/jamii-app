import React from 'react'
import UICARD from '../../Interface/UICARD';
import UI from '../../Interface/UI'
import  './hero.css'
import { Button } from '@material-ui/core';

const Hero = () => {
    return (
        <div>
          
          <div className="cover">
                
                <div className="desc">
                      <h2>Welcome to JAMII COMPASSIONATE</h2>

                      <h4>Putting You First</h4>

                      <div className="action">
                      <Button> <i class="fas fa-arrow-right"></i> Join Jamii</Button>
                   </div>
          </div>

          </div>
        

              {/* The About */}

              <div className="columns">
                     <UI>
                                <div className="card-1">
                                  
                                        <h1>WHO WE ARE</h1>
                                        <p>JAMII COMPASSIONATE holds several values close to our hearts, for prospects and partners. We take responsibility; have passion for ensuring reliable Funeral Services to our members. We are continually diligent to ensure the best solution with the expertise of our valued staff, which are knowledgeable, compassionate and loyal. We believe in family values, maintaining health and promoting positivity as well as helping the financially challenged individuals.</p> <br />

                                     </div>
                                          <div className="action">
                                      <Button> <i class="fas fa-arrow-right"></i> Join Jamii</Button>
                                      </div>
                            

                     </UI>


{/* The Second Card */}

                             <UICARD >
                                 <div className="card-2">
                                   <i class="far fa-lightbulb"></i>

                                    <div className="desc">
                                            <h2>Vision</h2>
                                        <p>To help Kenyans living in urban and semi-rural set-up to get empowered by providing a decent send-off, in the event of unforeseen eventualities.</p>
                                    </div>
                                 </div>

                            </UICARD>

       

{/* The Third Card */}

                              <UICARD >
                              <div className="card-2">
                              <i class="fas fa-gem"></i>
                                     
                                    <div className="desc">
                                    <h2>Mission</h2>
                                     <p>Our mission is to be the number one, last respect service provider in Kenya and East Africa at large.</p>

                                    </div>
                                     </div>

                                 </UICARD>

                        </div>   

                        

        </div>
    )
}

export default Hero;
