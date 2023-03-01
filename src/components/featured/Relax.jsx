import React from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { CardImage } from './CardImage'

const Relax = () => {
  SwiperCore.use([Navigation])

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView='auto' spaceBetween={15}>
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
    </>
  )
}

export default Relax
