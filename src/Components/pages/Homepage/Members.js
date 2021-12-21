import React from 'react'
import classes from './members.module.css'


const Members = () => {
    return (
        <div className={classes.columns}>
             <div className={classes.members}>
                 <div className={classes.data}>
                    <i class="fas fa-users"></i>
                     <h3>Happy Registerd Clients</h3>
                     
                           <h1>200000</h1>
                  

                 </div>

             </div>


             <div className={classes.members}>
                 <div className={classes.data}>
                   <i class="fas fa-smile-wink"></i>
                     <h3>Beneficiaries so far</h3>
                     
                         <h1>50000</h1>
                 
                 </div>

             </div>


             <div className={classes.members}>
                 <div className={classes.data}>
                 <i class="fas fa-users-slash"></i>
                     <h3>Funerals Conducted</h3>
                     
                         <h1>30000</h1>
                    
                 </div>

             </div>


             <div className={classes.members}>
                 <div className={classes.data}>
                 <i class="fas fa-flag-checkered"></i>
                     <h3>Countries Reached so far, Africa</h3>
                    
                         <h1>15</h1>
                   

                 </div>

             </div>

            
        </div>
    )
}

export default Members;
