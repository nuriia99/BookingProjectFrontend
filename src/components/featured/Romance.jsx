import React from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { CardImage } from './CardImage'

const Romance = () => {
  SwiperCore.use([Navigation])

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView='auto' spaceBetween={15}>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037978.jpg?k=6e09f8344bf183de3bb195c0362bdc78cb1e371e77546a7b011fd80e2329b68d&o=' title='Terrassa' properties='17 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037716.jpg?k=8d485b9e194513aa0b9e425ffd715f2cf04991667880a388d72624624e0fd584&o=' title='Vilafranca del Penedés' properties='46 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037679.jpg?k=939d905594531871a33bc861c8229bbbd8fa57f14de654093940a5efd04dac94&o=' title='Vilanova i la Geltrú' properties='78 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037766.jpg?k=fed451ade240e1ee572a357c1924e7f4854f972d8be3689cae1212b6cbe32c5e&o=' title='El Vendrell' properties='12 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140038090.jpg?k=9a4cf93dd8166d2a13a9ff48e8c1ed9c428225944bd1aa901ec528c301d8ee9e&o=' title='San Vicenç de Montalt' properties='98 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037919.jpg?k=223f37545cfa426f4893252cddeef1fd945e1f35f331f2060901e98c08c00e40&o=' title='Torredembarra' properties='200 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140037791.jpg?k=97f06def64ae4c963f425d9c4f7183e7a61e983eaf52206b7a246314ee3220bc&o=' title='Valls' properties='45 km aways'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140038109.jpg?k=b787d211dbeacca0f9d1851aeb82891ee1fc16d4a258cbf87baa7c93f82e674c&o=' title='Santa Susanna' properties='89 km away'/></SwiperSlide>
        <SwiperSlide><CardImage src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140038035.jpg?k=5db6f95f6bb3df4e452778ab15d7d480c5880515ae62426fd62ea31d9bbf0968&o=' title='Solsona' properties='19 km away'/></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Romance
