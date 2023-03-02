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
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037642.jpg?k=fc5860de35624fc050524ea6ccb07851e561e21105a09087432dce2eb05ce4d2&o=' title='Yaiza' properties='485 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037774.jpg?k=0e01523aefac508e7439b71271d0309d9fbabb87a404ec87727a16c4ae26b184&o=' title='Vega de San Mateo' properties='897 km away'/></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Relax
