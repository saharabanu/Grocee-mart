import React from 'react';
import payment1 from '../../../images/payment1.png';
import payment2 from '../../../images/payment2.png';
import payment3 from '../../../images/payment3.png';
import payment4 from '../../../images/payment4.png';
import payment5 from '../../../images/payment5.png';

const FooterBottom = () => {
  return (
    <>
        <div className="d-flex justify-content-between container footer-bottom1">
            <div className="">
            <div className="footer-bottom text-center pb-2">
                   <p>Copyright © 2022 All Rights Reserved by <span>Grocee</span></p>
               </div>
            </div>
            <div className="">
                <div>
                    <img className="px-2" src={payment1} alt="payment1" />
                    <img className="px-2" src={payment2} alt="payment2" />
                    <img className="px-2" src={payment3} alt="payment3" />
                    <img className="px-2" src={payment4} alt="payment4" />
                    <img src={payment5} alt="payment5" />
                </div>
            </div>
        </div>
    </>
  )
}

export default FooterBottom