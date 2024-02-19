import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import banner1 from '../../../assets/banner1.jpg'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.jpg'
import banner4 from '../../../assets/banner5.jpg'


const Banner = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide>
                <img src={banner1} alt="" className='w-full h-[600px]' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner2} alt=""  className='w-full h-[600px]'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner3} alt="" className='w-full h-[600px]' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={banner4} alt="" className='w-full h-[600px]' />
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;