import React from 'react'
import classes from './service.module.css'


const Services = () => {
    return (
       
       <div className={classes.services}>
             <div className={classes.container}>
                   <div className={classes.card}>
                   <i class="fab fa-servicestack"></i>
                   <h1>WELFARE</h1>
                   
                   <h5>We cover some of the funeral expenses in case of a covered member's demise, depending on the category of membership they belong to</h5>

                    </div>
                 

             </div>

             <div className={classes.desc}>
                 <p>Clothing.</p>
                 <p>Mortuary Fee.</p>
                 <p>Transport.</p>
                 <p>Exucutive Casket.</p>
                 <p>Lowering Gear.</p>
                 <p>2 Tents.</p>
                 <p>100 Seats/Chairs.</p>
                 <p>Gazebo Tent.</p>
                 <p>Public Address System.</p>   
                 <p>Bull.</p>
                 <p>Envelope Worth ksh. 25,000.</p>

             </div>

       </div>
    )
}

export default Services;
