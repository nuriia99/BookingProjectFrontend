import React from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { CardImage } from './CardImage'

const City = () => {
  SwiperCore.use([Navigation])

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView='auto' spaceBetween={15}>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037979.jpg?k=b37693491fa43c1c4d9482582e79fc42f684b2e77844b7818f6883e3ce7a8a20&o=' title='Tarragona' properties='78 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037626.jpg?k=37c5a8ca76e483962d6f2edf77661ce8a8e30b22cad3910b4c15dbac11bea1c5&o=' title='Zaragoza' properties='205 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037961.jpg?k=df20ded18c853b0305a1b1f0e21749a637401774a434cea0189356d4b1f50804&o=' title='Teruel' properties='1120 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037813.jpg?k=3562559edd2c796c44918c4b6cc16215cc72ebf82108fc92a7dbcfbf455105bb&o=' title='Valencia' properties='567 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140038048.jpg?k=223919fcbbc4df455eaac7256f9bdc81632e7c1b2055a721ec084a6ebbccd013&o=' title='Sigüeza' properties='234 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037647.jpg?k=7d2d8ef084d73da3307d3cba8a899851accd7dbd35e518a6e6004c7126a18e2a&o=' title='Vitoria' properties='56 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037945.jpg?k=ed055b28cb1803b66017f4d9c5d5ed6178f0ea45ef94543b49bf4edcc4f94ed3&o=' title='Segovia' properties='168 km aways'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037945.jpg?k=ed055b28cb1803b66017f4d9c5d5ed6178f0ea45ef94543b49bf4edcc4f94ed3&o=' title='Toledo' properties='785 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037807.jpg?k=9b61ac24075c1ceb4138242fc4be6efba4a9a4052c597de3cbb5f5d63789bd8f&o=' title='Valladolid' properties='578 km away'/></SwiperSlide>
      </Swiper>
    </>
  )
}

export default City
