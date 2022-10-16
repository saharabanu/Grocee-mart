import React from 'react';
import { Link } from 'react-router-dom';
import cat1 from '../../../../../../images/categories1.png';
import cat2 from '../../../../../../images/categories2.png';
import cat3 from '../../../../../../images/categories3.png';
import cat4 from '../../../../../../images/categories4.png';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css/navigation";


const CategoriesSection = () => {

    const categories=[
        {
            id:1,
            "name":"Broccoli",
            "quantity":"88",
            "img":cat1
        },
        {
            id:2,
            "name":"Cabbage",
            "quantity":"29",
            "img":cat2
        },
        {
            id:3,
            "name":"Red Tomato",
            "quantity":"92",
            "img":cat3
        },
        {
            id:4,
            "name":"Raw-Steak",
            "quantity":"55",
            "img":cat4
        },
        {
            id:5,
            "name":"Red Tomato",
            "quantity":"92",
            "img":cat3
        },
        {
            id:6,
            "name":"Cabbage",
            "quantity":"29",
            "img":cat2
        },
        {
            id:7,
            "name":"Broccoli",
            "quantity":"88",
            "img":cat1
        },
    ]
  return (
    <>
        <div className='text-center mb-5'>
            <p>Recently added our store</p>
            <h4>Our Hottest Categories</h4>
        </div>
       
        <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
    //   slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >

        <SwiperSlide>
        <div className='cat-part'>
            <img src={categories[0]?.img} alt="Cabbage" />
            <div className='ps-4'>
            <h3>{categories[0]?.name}</h3>
            <div className='d-flex justify-content-between align-items-center'>
            <p>{categories[0]?.quantity} Items</p>
            <Link to="/shop" className='cat-btn me-3 mb-3'><i className="fa-solid fa-arrow-right "></i></Link>
            </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='cat-part'>
            <img src={categories[1]?.img} alt="Cabbage" />
            <div className='ps-4'>
            <h3>{categories[1]?.name}</h3>
            <div className='d-flex justify-content-between align-items-center'>
            <p>{categories[1]?.quantity} Items</p>
            <Link to="/shop" className='cat-btn me-3 mb-3'><i className="fa-solid fa-arrow-right "></i></Link>
            </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='cat-part'>
            <img src={categories[2]?.img} alt="Cabbage" />
            <div className='ps-4'>
            <h3>{categories[2]?.name}</h3>
            <div className='d-flex justify-content-between align-items-center'>
            <p>{categories[2]?.quantity} Items</p>
            <Link to="/shop" className='cat-btn me-3 mb-3'><i className="fa-solid fa-arrow-right "></i></Link>
            </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='cat-part'>
            <img src={categories[3]?.img} alt="Cabbage" />
            <div className='ps-4'>
            <h3>{categories[3]?.name}</h3>
            <div className='d-flex justify-content-between align-items-center'>
            <p>{categories[3]?.quantity} Items</p>
            <Link to="/shop" className='cat-btn me-3 mb-3'><i className="fa-solid fa-arrow-right "></i></Link>
            </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='cat-part'>
            <img src={categories[4]?.img} alt="Cabbage" />
            <div className='ps-4'>
            <h3>{categories[4]?.name}</h3>
            <div className='d-flex justify-content-between align-items-center'>
            <p>{categories[4]?.quantity} Items</p>
            <Link to="/shop" className='cat-btn me-3 mb-3'><i className="fa-solid fa-arrow-right "></i></Link>
            </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='cat-part'>
            <img src={categories[5]?.img} alt="Cabbage" />
            <div className='ps-4'>
            <h3>{categories[5]?.name}</h3>
            <div className='d-flex justify-content-between align-items-center'>
            <p>{categories[5]?.quantity} Items</p>
            <Link to="/shop" className='cat-btn me-3 mb-3'><i className="fa-solid fa-arrow-right "></i></Link>
            </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='cat-part'>
            <img src={categories[6]?.img} alt="Cabbage" />
            <div className='ps-4'>
            <h3>{categories[6]?.name}</h3>
            <div className='d-flex justify-content-between align-items-center'>
            <p>{categories[6]?.quantity} Items</p>
            <Link to="/shop" className='cat-btn me-3 mb-3'><i className="fa-solid fa-arrow-right "></i></Link>
            </div>
            </div>
        </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default CategoriesSection