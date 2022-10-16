import React from 'react';
import logImg from '../../../images/nav-log.png';

const FooterPart1 = () => {
  return (
    <>
        <div className="part-1">
                           <div className="footer-logo">
                               <img className='img-fluid pb-4' src={logImg} alt="logo" />
                           </div>
                          
                           <p className='pb-4'>The variety of products available at our store at the moment is vast, but we still continue to widen our assortment.</p>
                           <div className="">
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook nav-icon"></i></a>
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter nav-icon"></i></a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram nav-icon"></i></a>
                                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube nav-icon"></i></a>
                                    
                                    
                                </div>
                           {/* <div className="address">
                               <p><i className="fa-solid fa-phone"></i> 1800 833 6010</p>
                               <p> <i className="fa-solid fa-envelope"></i> support@saveecoorganic.com</p>
                               <p><i className="fa-solid fa-location-dot"></i> HIG, Corporate Office:Road No .10, Sanjay Gandhi Nagar, Hanuman Nagar, Patna, Bihar 800020</p>
                               <p><i className="fa-solid fa-clock"></i> 10:00 - 18:00, Mon - Sat</p>
                           </div> */}
                       </div>
    </>
  )
}

export default FooterPart1