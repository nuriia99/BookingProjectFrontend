import React from 'react'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

const Featured = () => {
  SwiperCore.use([Navigation])
  return (
    <div className='featured'>
      <div className="featured_item">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" spaceBetween={50}
      slidesPerView={4}>
        <SwiperSlide><img src="https://q-xx.bstatic.com/xdata/images/city/250x250/645962.jpg?k=2356102edee342d7d86243493004e8c038854fa0ecdaf79b84e85ce609aaa4e2&o=" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://q-xx.bstatic.com/xdata/images/city/250x250/645962.jpg?k=2356102edee342d7d86243493004e8c038854fa0ecdaf79b84e85ce609aaa4e2&o=" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://q-xx.bstatic.com/xdata/images/city/250x250/645962.jpg?k=2356102edee342d7d86243493004e8c038854fa0ecdaf79b84e85ce609aaa4e2&o=" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://q-xx.bstatic.com/xdata/images/city/250x250/645962.jpg?k=2356102edee342d7d86243493004e8c038854fa0ecdaf79b84e85ce609aaa4e2&o=" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://q-xx.bstatic.com/xdata/images/city/250x250/645962.jpg?k=2356102edee342d7d86243493004e8c038854fa0ecdaf79b84e85ce609aaa4e2&o=" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://q-xx.bstatic.com/xdata/images/city/250x250/645962.jpg?k=2356102edee342d7d86243493004e8c038854fa0ecdaf79b84e85ce609aaa4e2&o=" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://q-xx.bstatic.com/xdata/images/city/250x250/645962.jpg?k=2356102edee342d7d86243493004e8c038854fa0ecdaf79b84e85ce609aaa4e2&o=" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://q-xx.bstatic.com/xdata/images/city/250x250/645962.jpg?k=2356102edee342d7d86243493004e8c038854fa0ecdaf79b84e85ce609aaa4e2&o=" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://q-xx.bstatic.com/xdata/images/city/250x250/645962.jpg?k=2356102edee342d7d86243493004e8c038854fa0ecdaf79b84e85ce609aaa4e2&o=" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://q-xx.bstatic.com/xdata/images/city/250x250/645962.jpg?k=2356102edee342d7d86243493004e8c038854fa0ecdaf79b84e85ce609aaa4e2&o=" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://q-xx.bstatic.com/xdata/images/city/250x250/645962.jpg?k=2356102edee342d7d86243493004e8c038854fa0ecdaf79b84e85ce609aaa4e2&o=" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://q-xx.bstatic.com/xdata/images/city/250x250/645962.jpg?k=2356102edee342d7d86243493004e8c038854fa0ecdaf79b84e85ce609aaa4e2&o=" alt="" /></SwiperSlide>

    </Swiper>

      </div>
    </div>
  )
}

export default Featured
