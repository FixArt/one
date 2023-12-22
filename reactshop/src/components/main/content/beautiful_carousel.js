import slide1 from '../../../assets/images/slide1.png';
import slide2 from '../../../assets/images/slide2.png';
import slide3 from '../../../assets/images/slide3.png';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './beautiful_carousel.css';

function BeautifulCarousel() {
    return (<>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            
        >
            <SwiperSlide><div className="beautiful_slide" style={{backgroundImage: `url(${slide1})`}}><h1 className='text'>МИ</h1></div></SwiperSlide>
            <SwiperSlide><div className="beautiful_slide" style={{backgroundImage: `url(${slide2})`}}><h1 className='text'>Є</h1></div></SwiperSlide>
            <SwiperSlide><div className="beautiful_slide" style={{backgroundImage: `url(${slide3})`}}><h1 className='text'>КРУТІ</h1></div></SwiperSlide>
        </Swiper>
    </>);
}

export default BeautifulCarousel;