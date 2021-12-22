import React from 'react'
import classes from './navigation.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../Img/logo.jpeg';

const Navigation = () => {
    return (

        <> 
          <header> 
 
              <div className={classes.fnav}>
                    <div className={classes.contact}>
                         <i class="fas fa-envelope-square">
                             <span>jamiicompassionateltd@gmail.com</span>
                         </i>
 
                         <i class="fas fa-phone">
                             <span>07xx-xxx-xxx</span>
                         </i>
                         
 
                    </div>
 
                    <div className={classes.socials}>

                          <Link to={{pathname: "https://www.instagram.com/jamiicom/?hl=en"}} target='_blank'><i class="fab fa-instagram"></i></Link>
                         <Link to={{pathname:"https://www.twitter.com/jamiicom_"}} target='_blank'><i class="fab fa-twitter"></i></Link>
                         <Link to={{pathname:"https://www.facebook.com/KevinMoishylez"}} target="_blank"><i class="fab fa-facebook"></i></Link>
 
                    </div>
 
 
 
              </div>
 
             <nav className={classes.nav}>
                      <div className={classes.logo}>
                           <img src={Logo} alt="" />
                         
                      </div>
                      <h1>JAMII COMPASSIONATE</h1>
 
                   <ul>
                         <li><Link to='/'>Home</Link></li>
                         <li><Link to='/services'>Services</Link></li>
                         <li><Link to='/gallery'>Gallery</Link></li>
                         <li><Link to='/packages'>Membership Packages</Link></li>
                         <li><Link to='payment'>Payment</Link></li>
                         <li><Link to='/register'>Register</Link></li>
                         <li><Link to='/contact'>Contact Us</Link></li>
                        
 
                   </ul>
                  
               </nav>
 
           </header>
 
        
        </>
    )
}

export default Navigation;
