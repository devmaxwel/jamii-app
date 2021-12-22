import React from 'react'
import './footer.css';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div>
        <footer>
            <div className="container">
                <div className="sec aboutus">
                <h2>OBJECTIVES</h2>
                <p>
To empower our members financially.</p>
 <p>To promote a sense of belonging for our members to live as a family.</p>
<p>To assist members and their beneficiaries with funeral expenses. 
</p>

                <ul className="sci">
                       <Link> <li><i class="fab fa-facebook-square" aria-hidden='true'></i></li></Link>
                       <Link> <li><i class="fab fa-twitter" aria-hidden='true'></i></li></Link>
                       <Link> <li><i class="fab fa-linkedin" aria-hidden='true'></i></li></Link>
                       <Link> <li><i class="fab fa-instagram" aria-hidden='true'></i></li></Link>
                     
                  </ul>
                </div>
                    <div className="sec quicklinks">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><Link>Home</Link></li>
                          <li>  <Link>Privacy Policy</Link></li>
                           <li> <Link>Help</Link></li>
                           <li> <Link>Faqs</Link></li>
                            <li><Link>Terms & Conditions</Link></li>
                           <li> <Link>Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="sec contact">
                        <h2>Contact Info</h2>
                        <ul className="info">
                           
                           <li>
                           <span><i class="fas fa-map-marker-alt"></i></span>
                            <span>Ruaraka Outering Road<br /> Off Thika Road,Matigari building, 4th floor <br />KENYA</span>
                           </li>

                           <li>
                           <span><i class="fas fa-phone-volume"></i></span>
                           <p><Link>+2547xx-xxx-xxx</Link> <br /><Link>+2547xx-xxx-xxx</Link></p>
                           </li>

                     
                          
                           <li>
                           <span><i class="fas fa-envelope-square"></i></span>
                           <p> <Link>Email Us</Link></p>
                           </li>

                        </ul>

                        </div>

                </div>
        </footer>

        <div class="copyrightText">
            <p>Copyright  ©2021 Jamii Comapssionate Ltd. All Rights Reserved</p>
            <p><Link  to={{ pathname: "https://devmaxwel.github.io/portfolio/" }} target="_blank">[Developed By DevMaxwel]</Link></p>
        </div>

        </div>
    )
}

export default Footer;