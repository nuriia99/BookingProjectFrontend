import React from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { CardImage } from './CardImage'

const Outdoors = () => {
  SwiperCore.use([Navigation])

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView='auto' spaceBetween={15}>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037995.jpg?k=e0a2d7b8c3c2a04905b4807f461b088109aad93db224b8e8ea767ddb20ce69f8&o=' title='Taull' properties='475 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037750.jpg?k=388d802dbfc8c2b97e58bf9dcd2fc1350f9c164827f0726c1b6cb3419962c854&o=' title='Vielha' properties='45 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037932.jpg?k=714b21a598fef0abe0c509f7ad7a4ec948fab35f46d9340db56898137b31e149&o=' title='Torla' properties='367 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037631.jpg?k=746b26930d69f20ca07d7ba20e6f3f0f160399f28e0937ec494efb73bf02bef8&o=' title='Zahara de la Sierra' properties='23 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037970.jpg?k=b8a74f3df0a338a2134d6808f98d744763cb008c2ad193745988386ae1398abf&o=' title='Tejeda' properties='754 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037796.jpg?k=a9705aff5f6ab7eba95aafa9b6f4cd458d4696500dab273c4fc1f73643068257&o=' title='Vallehermoso' properties='85 km away'/></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Outdoors
