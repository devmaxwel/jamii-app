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

                      <h4>We Value your Welfare</h4>

                      <div className="action">
                      <Button> <i class="fas fa-arrow-right"></i> Join Jamii</Button>
                   </div>
          </div>

          </div>
        

              {/* The About */}

              <div className="columns">
                     <UI>
                                <div className="card-1">
                                  
                                        <h1>About JAMII COMPASSIONATE</h1>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <br />

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
                                            <h2>Mission</h2>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                 </div>

                            </UICARD>

       

{/* The Third Card */}

                              <UICARD >
                              <div className="card-2">
                              <i class="fas fa-gem"></i>
                                     
                                    <div className="desc">
                                    <h2>Vision</h2>
                                     <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                    </div>
                                     </div>

                        </UICARD>

                        </div>   

        </div>
    )
}

export default Hero;
