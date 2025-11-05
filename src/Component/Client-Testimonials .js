import {clientTestimonials} from '../Data/clientTestimonials.js' 
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper modules (correct import for v10+)
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const ClientTestimonials = () => {
    return (
        <>
        <div className='container mx-auto w-4/5 py-12'>
        <Swiper
  spaceBetween={50}
  slidesPerView={3}
  navigation={true} // enable arrows
  autoplay={{ delay: 9000, disableOnInteraction: false }}
  modules={[Navigation, Autoplay]} // register modules
  breakpoints={{
          0: {
            slidesPerView: 1, // mobile
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2, // tablet
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // desktop
            spaceBetween: 30,
          },
        }}
>
  {clientTestimonials.map((item, idx) => (
    <SwiperSlide key={idx} className="test_card">
      <h4>{item.name}</h4>
      <h5>{item.company}</h5>
      <p>{item.feedback}</p>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
        </>
    )
} 

export default ClientTestimonials ;