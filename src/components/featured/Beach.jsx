import React from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { CardImage } from './CardImage'

const Beach = () => {
  SwiperCore.use([Navigation])

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView='auto' spaceBetween={15}>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140038042.jpg?k=5c62365b866c29767b52a3bc50f83bde470fdbe83b8e9fc1885c9fd659d6b594&o=' title='Sitges' properties='745 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037896.jpg?k=311e6de53c4bb25560f74c6057cbe925f8638fec2fd0c54b951615fe94f360da&o=' title='Torrevieja' properties='24 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140038114.jpg?k=995a7998175688bee56fff1b6f017185778f648099a75e7ca54edfaa685371ce&o=' title='Santander' properties='678 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037906.jpg?k=4e7efc690f55a80d0970abc70e683640bbaba188fff26a8142a489d648ed987e&o=' title='Torremolinos' properties='48 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037748.jpg?k=6dfcc0c468cd0da81d006b5be89250cf8a65c3807c43d7fbd12673f9289201b7&o=' title='Viego' properties='735 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037980.jpg?k=b66a21b65762a2db25fcf612886985a006408420c3c8707718356b391e99e68f&o=' title='Tarifa' properties='245 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037971.jpg?k=4699e53d7a05e528ff969b2ea991c1b5bb4661f22ef5f86e532064126a62bc11&o=' title='Costa Teguise' properties='1,947 km away'/></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Beach
