import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import FooterTop from '../../Shared/Footer/FooterTop'
import Navigation from '../../Shared/Navigation/Navigation'
import NavigationTop from '../../Shared/Navigation/NavigationTop'
import NavigattionMiddle from '../../Shared/Navigation/NavigattionMiddle'

const Layout = ({children}) => {
  return (
    <>
       <NavigationTop/>
        <NavigattionMiddle/>
        <Navigation/>
         <div className="">
            {children}
         </div>
         <FooterTop/>
        <Footer/>
    </>
  )
}

export default Layout