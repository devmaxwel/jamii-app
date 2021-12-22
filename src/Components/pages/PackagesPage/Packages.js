import React from 'react'
import classes from './packages.module.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'; 



const Pakages = () => {
    return (
        <div>

            <div className={classes.packages}>
            <h1>Premiums</h1>
                 <p>Here is a summary of our membership categories and the monthly premiums in each</p>

                <div className={classes.container}>
                

                     <div className={classes.cards}>
                         <div className={classes.header1}>
                           <p>Bronze Membership</p>
                             <div className={classes.desc}> 
                                 <h5>Ksh <sub>100 <sub>/month</sub></sub> </h5>
                                 <p>Single Individual</p>
                                 <p>Below age 70 yrs</p>
                                 <di className={classes.footer}>
                                     <div className={classes.action}>
                                     <Link style={{textDecoration:"none"}}><Button>Register</Button></Link>
                                     </div>
                                     
                                      
                                 </di>
                             </div>
                         </div>

                           
                     </div>

                     <div className={classes.cards}>
                     <div className={classes.header2}>
                           <p>Silver Membership</p>
                             <div className={classes.desc}> 
                                 <h5>Ksh <sub>150 <sub>/month</sub></sub> </h5>
                                 <p>For Couples(husband & Wife)</p>
                                 <p>Below age 70 yrs</p>
                                 <di className={classes.footer}>
                                     <div className={classes.action}>
                                     <Link style={{textDecoration:"none"}}><Button>Register</Button></Link>
                                     </div>
                                     
                                      
                                 </di>
                             </div>
                         </div>

                           
                     </div>

                     <div className={classes.cards}>
                     <div className={classes.header1}>
                           <p>Gold Membership</p>
                             <div className={classes.desc}> 
                                 <h5>Ksh <sub>200 <sub>/month</sub></sub> </h5>
                                 <p>Family Cover</p>
                                 <p>Couples(husband & wife) below 69 yrs.</p>
                                 <p>Children below 17 yrs</p>
                                 <di className={classes.footer}>
                                     <div className={classes.action}>
                                     <Link style={{textDecoration:"none"}}><Button>Register</Button></Link>
                                     </div>
                                     
                                      
                                 </di>
                             </div>
                         </div>

                           
                     </div>

                     <div className={classes.cards}>
                     <div className={classes.header2}>
                           <p>Platinum Membership</p>
                             <div className={classes.desc}> 
                                 <h5>Ksh <sub>250 <sub>/month</sub></sub> </h5>
                                 <p>Extended Family Cover</p>
                                 <p>Couples(husband & wife) below 69 yrs</p>
                                 <p>Children below 17 yrs</p>
                                 <p>Paternal/biological parents below 69 yrs</p>
                                 <di className={classes.footer}>
                                     <div className={classes.action}>
                                     <Link style={{textDecoration:"none"}}><Button>Register</Button></Link>
                                     </div>
                                     
                                      
                                 </di>
                             </div>
                         </div>

                           
                     </div>
                   
                </div> <br/><br/> <br/><br/>
                <h1>Other Categories</h1>
              
                <p>Here are other categories for extended families cover, in-laws and family members aged 69 years and above</p>

                <div className={classes.container2}>
                   

                     <div className={classes.cards}>
                         <div className={classes.header1}>
                             <p>Diamond</p>
                         <div className={classes.desc}> 
                                 <h5>Ksh <sub>350 <sub>/month</sub></sub> </h5>
                                 <p>Covers extended family </p>
                                 <p>and in-laws monthly payment</p>
                                 <p>Below 70 yrs</p>
                                 <di className={classes.footer}>
                                     <div className={classes.action}>
                                     <Link style={{textDecoration:"none"}}><Button>Register</Button></Link>
                                     </div>
                                     
                                      
                                 </di>
                             </div>
                         </div>

                           
                     </div>

                     <div className={classes.cards}>
                     <div className={classes.header2}>
                             <p>Continuum</p>
                         <div className={classes.desc}> 
                                 <h5>Ksh <sub>600 <sub>/month</sub></sub> </h5>
                                 <p>Cover for the parent whose age is 70 years and above.</p>
                                 
                                 <di className={classes.footer}>
                                     <div className={classes.action}>
                                     <Link style={{textDecoration:"none"}}><Button>Register</Button></Link>
                                     </div>
                                     
                                      
                                 </di>
                             </div>
                         </div>

                           
                     </div>

                     <div className={classes.cards}>
                     <div className={classes.header1}>
                             <p>VIP Membership</p>
                         <div className={classes.desc}> 
                                 <h5>Ksh <sub>1000 <sub>/month</sub></sub> </h5>
                                 <p>Covers all members of the family outside the extended family.</p>
                                 
                                 <di className={classes.footer}>
                                     <div className={classes.action}>
                                     <Link style={{textDecoration:"none"}}><Button>Register</Button></Link>
                                     </div>
                                     
                                      
                                 </di>
                             </div>
                         </div>

                           
                     </div>

                     <div className={classes.cards}>
                     <div className={classes.header2}>
                             <p>VVIP Membership</p>
                         <div className={classes.desc}> 
                                 <h5>Ksh <sub>1000<sub>/month</sub></sub> </h5>
                                 <p>Covers Guardians and Friends</p>
                            
                                 <di className={classes.footer}>
                                     <div className={classes.action}>
                                     <Link style={{textDecoration:"none"}}><Button>Register</Button></Link>
                                     </div>
                                     
                                      
                                 </di>
                             </div>
                         </div>

                           
                     </div>
                   
                </div>


                
              

            </div>
            
        </div>
    )
}

export default Pakages;
