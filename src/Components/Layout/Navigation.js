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
                         <Link><i class="fab fa-facebook"></i></Link>
                         <Link><i class="fab fa-instagram"></i></Link>
                         <Link><i class="fab fa-twitter"></i></Link>
 
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
                         <li><Link>Gallery</Link></li>
                         <li><Link>Membership Packages</Link></li>
                         <li><Link>Payment</Link></li>
                         <li><Link>Register</Link></li>
                         <li><Link>Contact Us</Link></li>
                        
 
                   </ul>
                  
               </nav>
 
           </header>
 
        
        </>
    )
}

export default Navigation;
