import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import FooterBottom from './FooterBottom';
import FooterPart1 from './FooterPart1';
import FooterPart2 from './FooterPart2';
import FooterPart3 from './FooterPart3';
import FooterPart4 from './FooterPart4';
import FooterPart5 from './FooterPart5';

const Footer = () => {
  return (
    <>
   
       <div className='footer mt-5 pt-5'>
             <ScrollToTop className='' smooth top="50" color="#fff"/>
           <div className="container ">
               <div className="row g-4">
                   <div className="col-md-3">
                       <FooterPart1/>
                   </div>
                   <div className="col-md-2">
                       <FooterPart2/>
                   </div>
                   <div className="col-md-2 ">
                       <FooterPart3/>
                   </div>
                   <div className="col-md-2 ">
                       <FooterPart5/>
                   </div>
                   <div className="col-md-3 ">
                        <FooterPart4/>
                        

                   </div>
               </div>
               
           </div>
           <hr />
              <FooterBottom/>
        </div>
    </>
  )
}

export default Footer