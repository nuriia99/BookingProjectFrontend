import React from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { CardImage } from './CardImage'

const Ski = () => {
  SwiperCore.use([Navigation])

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView='auto' spaceBetween={15}>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037886.jpg?k=6544b7f5e1e042a166d63627b7f769d6356a642e99dcffa341f97a8ba5d7c43f&o=' title='Toses' properties='485 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140051910.jpg?k=20ee47f5c0e4dd048bcb7c6bab9d0bdec58efb3e638ea26c3fbdaa31132ebce1&o=' title='Masella' properties='234 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037781.jpg?k=61bc58e02abe0a53957f01b46b2c2f724ec2d3422d5c5335ab5da429f8ecf3ed&o=' title='Baqueira-Beret' properties='135 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037876.jpg?k=e427fb3c95d2650873612f721e127c1eede7ecd45f8afca7272bd3e462d1f205&o=' title='Tredós' properties='75 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140051564.jpg?k=a8cf7e5bbc0ff7f934140378f14cbfd3b368b12b91b9ace135cea6387affe2bf&o=' title='Astun' properties='367 km away'/></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Ski
