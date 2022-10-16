import React from 'react'
import Layout from '../../../../Common/Layout/Layout'
import Banner from './Banner/Banner'
import CategoriesSection from './CategoriesSection/CategoriesSection'
import HeroSection from './HeroSection/HeroSection'
import ProductSection from './ProductSection'

const Home = () => {
  return (
    <>
    <Layout>
    <HeroSection/>
    <CategoriesSection/>
   <ProductSection/>
   <Banner/>
    </Layout>

    </>
  )
}

export default Home