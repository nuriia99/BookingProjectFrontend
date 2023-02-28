import React from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { CardImage } from './CardImage'

const Featured = () => {
  SwiperCore.use([Navigation])
  return (
    <div className='featured'>
      <div className="featured_item_offers">
        <h2>Offers</h2>
        <p>Promotions, deals and special offers for you</p>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={1}
          spaceBetween={10} breakpoints={{
            1034: {
              slidesPerView: 2,
              spaceBetween: 10
            }
          }}>
          <SwiperSlide>
            <div className="card_offers">
              <div className="card_offers_fly">
                <h4 className='title'>Fly away to your dream holiday</h4>
                <span className='content'>Get inspired, compare and book flights with more flexibility </span>
                <button className="btn_blue button">Search for flights</button>
                <img className='img' src="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/184698944.jpeg?k=7652b7b65903f21464b812d3eca387f9a7e0241b1df0b4ebe981ba95df4b254c&o=" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card_offers_img woman">
              <h4 className='title'>Escape for a while</h4>
              <span className='content'>Enjoy the freedom of a monthly stay on Booking.com </span>
              <button className="btn_blue button">Discover monthly stays</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card_offers_img mountain">
              <h4 className='title'>New year, new adventures</h4>
              <span className='content'>Save 15% or more when you book and stay before 31 March 2023</span>
              <button className="btn_blue button">Find Early 2023 Deals</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="featured_item">
        <h2>Explore Spain</h2>
        <p>These popular destinations have a lot to offer</p>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={1}
          spaceBetween={10} breakpoints={{
            632: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            823: {
              slidesPerView: 5,
              spaceBetween: 20
            },
            982: {
              slidesPerView: 6,
              spaceBetween: 20
            }
          }}>
          <SwiperSlide><CardImage src='https://q-xx.bstatic.com/xdata/images/city/300x240/645962.jpg?k=2356102edee342d7d86243493004e8c038854fa0ecdaf79b84e85ce609aaa4e2&o=' title='Seville' properties='3,352 properties'/></SwiperSlide>
          <SwiperSlide><CardImage src='https://q-xx.bstatic.com/xdata/images/city/300x240/968315.jpg?k=14d0bad185930ec2663562b999ecf498fb6fcf492c16a4c33228504a15e2d119&o=' title='Barcelona' properties='3,303 properties'/></SwiperSlide>
          <SwiperSlide><CardImage src='https://q-xx.bstatic.com/xdata/images/city/300x240/646053.jpg?k=e3ce89e2a1378141324ec06b415751bd63f06cb085a0eda3c915e16cc073bf8b&o=' title='Valencia' properties='2,152 properties'/></SwiperSlide>
          <SwiperSlide><CardImage src='https://r-xx.bstatic.com/xdata/images/city/300x240/645280.jpg?k=b9136ae0892b4ec0cb4c561867bb057afdff4297e53652039f41488a9549572e&o=' title='Granada' properties='1,453 properties'/></SwiperSlide>
          <SwiperSlide><CardImage src='https://q-xx.bstatic.com/xdata/images/city/300x240/971353.jpg?k=a5b47d2c38469086427837dfe64ab2e6f57ba52f0504359ef4cc02dc4b9b0737&o=' title='Madrid' properties='5,758 properties'/></SwiperSlide>
          <SwiperSlide><CardImage src='https://r-xx.bstatic.com/xdata/images/city/300x240/645577.jpg?k=81d61cb4e120af4d4218386546a117b77ef18dfcf3727d186ec3a1aad60f38fe&o=' title='Málaga' properties='3,904 properties'/></SwiperSlide>
          <SwiperSlide><CardImage src='https://r-xx.bstatic.com/xdata/images/region/300x240/48980.jpg?k=8c7ce0bf56a2b44fb1e9d6e5f87be1cec71fa9773817c90960a0502169d155cf&o=' title='Majorca' properties='10,768 properties'/></SwiperSlide>
          <SwiperSlide><CardImage src='https://q-xx.bstatic.com/xdata/images/region/300x240/49005.jpg?k=1919909ccea6870002670f6841ffe83a20a00cb959e253dace751918ef885135&o=' title='Tenerife' properties='9,602 properties'/></SwiperSlide>
          <SwiperSlide><CardImage src='https://q-xx.bstatic.com/xdata/images/city/300x240/971913.jpg?k=4fb9a4a41b53b5a6e0764e4494290fb3170a60d1850e332e7f1b4d430655085e&o=' title='Córdoba' properties='1,158 properties'/></SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Featured
